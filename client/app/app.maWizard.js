function maWizard() {
	var dataContext;
	var dataContextDep = new Deps.Dependency;

	var collection;
	var schema;

	var validationContext;

	var isInDatabase;

	var buildObjectFromSchema = function() {

	};

	this.setDataContext = function(context) {
		dataContext = context;
		dataContextDep.changed();
	};

	this.getDataContext = function() {
		dataContextDep.depend();
		return dataContext;
	};

	this.getValidationContext = function() {
		return validationContext;
	};

	this.parseHTMLElement = function(elem) {
		// extracting field name from data-schemafield attribute
		var field = elem.getAttribute('data-schemafield');
		var inputType = elem.type;//('type');

		// if the input is a checkbox we want to get its checked state,
		// for a ,ultiple select we want the selected elements and for 
		// the other inputs we simply get the value
		var value;
		if(inputType === "checkbox")
			value = elem.checked;
		else if(inputType === "select-multiple") {
			var ops = _.filter(elem.options, function(elem) {
				if(elem.selected)
					return true;
			});
			value = _.map(ops, function(elem) {
				return elem.value;
			});
		}
		else value = elem.value;

		// constructing the object to pass to validateOne(obj, key)
		var fieldValuePair = {};
		fieldValuePair[field] = value;
		
		return fieldValuePair;
	};

	this.saveHTMLElement = function(elem) {
		var toSave = this.parseHTMLElement(elem);

		// update the data context
		Meteor.maWizard.updateContext(toSave);

		// clean the object "to avoid any avoidable validation errors" 
		// [cit. aldeed - Simple-Schema author]
		schema.clean(toSave, {removeEmptyStrings: false});
		// TODO: rework this!!!!
		validationContext.validateOne(toSave, Object.keys(toSave)[0]);
	};

	this.create = function() {
		// return a feedback about validation and database errors

		var data = Meteor.maWizard.getDataContext();

		// the clean method performs useful operations to avoid
		// tricky validation errors (like conversion of String 
		// to Number when it is meaningful)
		schema.clean(data);

		if(validationContext.validate(data)) {
			var id = collection.insert(data, function(error, result) {
				if(error !== undefined)
					console.log("Error on insert", error);
			});

			data["_id"] = id;
			this.setDataContext(data);
		}
		else return false;
	};

	this.updateContext = function(newData) {
		var current = dataContext;

		// apply changes to current object
		for(var field in newData) {

			var dotIndex = field.indexOf(".");

			if(dotIndex > -1 && field[dotIndex + 2] === '.') {
				// we are dealing with a field of the type 'mainField.$.customField',
				// which is a field of a custom object saved in an array named mainField
				var mainField = field.substring(0, dotIndex);
				var index = field.substr(dotIndex + 1,1);
				var customField = field.substring(dotIndex + 3);

				// the corresponding object must already exist in the 
				// data context, so I just assign the new value
				current[mainField][index][customField] = newData[field];

				// if customary units are used, convert values before saving
				if(Session.get('usingCustomaryUnits') &&
					field.substring(field.length - 6) === "height" ||
					field.substring(field.length - 6) === "length" ||
					field.substring(field.length - 5) === "depth") {

					var value1 = parseInt(current[mainField][index][customField], 10);

					if(!isNaN(value1))
						current[mainField][index][customField] = value1 * 2.54;
				}
			} // following if condition is too long, refactor
			else if(_.contains(schema.firstLevelSchemaKeys(), field) && Array.isArray(schema.schema()[field].type()) && !Array.isArray(newData[field])) {
				// If for the current field the schema expects an array of objects 
				// but a single object is passed, I add the object to the current array
				var elems = [];
				if(current[field] !== undefined)
					// use .slice() to achieve deep copy
					elems = current[field].slice(0);
				elems.push(newData[field]);
				current[field] = elems;
			}
			else {
				// if the type changes, reset material and technique
				if(field === "type" && newData[field] !== current[field]) {
					current["material"] = [];
					current["technique"] = [];

					try {
						// the multiselect elements must be cleared programmatically
						// via the provided methods
						var techSelect = $('.multiselect.technique');
						techSelect.multiselect('deselect', techSelect.val());
						var matSelect = $('.multiselect.material');
						matSelect.multiselect('deselect', matSelect.val());
					}
					catch(e) {
						// if no values where selected an exception is thrown
						// in such a case we don't need to do anything, just relax :)
					}
				}

				current[field] = newData[field];
			}
		}

		// if customary units are used, convert values before saving
		if(Session.get('usingCustomaryUnits') &&
				field === "height" ||
				field === "length" ||
				field === "depth") {

				var value = parseInt(current[field], 10);

				if(!isNaN(value))
					current[field] = value * 2.54;
			}

		// save the modified object
		Meteor.maWizard.setDataContext(current);
	};

	this.removeFieldValue = function() {

	};

	this.saveToDatabase = function() {
		var current = Meteor.maWizard.getDataContext();
		// up-to-date data are already in the dataContext variable, just validate
		// the entire object without the _id field
		var toSave = _.omit(current, '_id');

		validationContext.resetValidation();
		// usual clean
		schema.clean(toSave, {removeEmptyStrings: false});
		validationContext.validate(toSave);

		if(validationContext.invalidKeys().length > 0)
			return false;
		else
			return collection.update(current._id, {$set: toSave}, function(error, result) {
				// something went wrong... 
				// TODO: add a callback that saves the datacontext in order not
				// to lose changes
			});
	};

	this.removeFromDatabase = function() {

	};

	this.existsInDatabase = function() {

	};

	this.changed = function() {
		var inDatabase = collection.findOne({_id: this.getDataContext()._id});

		return !_.isEqual(inDatabase, this.getDataContext());
	};

	this.discard = function() {
		// TODO: remove orphan attachments files!!!
		this.setDataContext(undefined);
	};

	this.configure = function(conf) {
		var contextObj;

		collection = conf.collection;
		
		if(collection === undefined)
			throw "No collection defined for maWizard!";

		if(conf.schema === undefined)
			schema = collection.simpleSchema();
		else
			schema = conf.schema;

		validationContext = schema.namedContext();

		// if no id is specified I am adding a new object
		if(conf.id === undefined) {
			// refactor!
			// implement buildObjectFromSchema() and substitute
			contextObj = {
				_id: undefined,
				inventory: "",
				title: "",
				authors: "",
				description: "",
				dating: "",
				type: "",
				material: [],
				technique: [],
				frame: false,
				mount: false,
				base: false,
				manuals: false,
				covers: false,
				"case": false, // 'case' is a reserved word
				belts: false,
				site: "",
				city: "",
				UVP: "",
				RH: "",
				temperature: "",
				lux: "",
				AMO: "",
				height: "",
				length: "",
				depth: "",
				multiple: false,
				objects: [],
				attachments: []
			};
		}
		else contextObj = collection.findOne(conf.id);

		this.setDataContext(contextObj);
	};
}

Meteor.startup(function() {
	Meteor.maWizard = new maWizard();
});