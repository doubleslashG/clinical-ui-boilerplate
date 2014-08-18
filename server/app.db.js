Meteor.publish('users', function() {
	return Anagraphics.find();
});

Meteor.publish('artworks', function() {
	return Artworks.find();
});

Artworks.allow({
    update: function(userId) {
        return userId;
    },
    remove: function(userId) {
        return userId;
    }
});

Meteor.methods({
	// this method has become useless when switched to a temporary reactive 
	// data structure to store current artwork's changes
	removeMaterialAndTechnique: function(docId) {
		return Artworks.remove({_id: docId, fields: { material: 1, technique: 1}});
	},
	removeObject: function(artworkId, objname) {
		return Artworks.remove({_id: artworkId});
	}
});