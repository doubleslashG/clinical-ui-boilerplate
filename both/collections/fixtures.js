artworkTypeTaxonomy = [
	{	id: 1,
		name: "Dipinto",
		technique: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6"
			],
		material: [
			"1",
			"2",
			"3"
		]
	},
	{ id: 2,
		name: "Disegno",
		technique: [
			"1",
			"2"
		],
		material: [
			"1",
			"2",
			"3"
		]
	},
	{ id: 3,
		name: "Incisione",
		technique: [
			"1",
			"2"
		],
		material: [
			"1",
			"2",
			"3"
		]
	},
	{ id: 4,
		name: "Scultura",
		technique: [
			"5",
			"6",
			"7",
			"8"
		],
		material: [
			"4",
			"5",
			"6"
		]
	},
	{ id: 5,
		name: "Tessile",
		technique: [
			"1",
			"2"
		],
		material: [
			"1",
			"2",
			"3"
		]
	}
];

materials = [
	{ id: 1, name: "Canvas"},
	{ id: 2, name: "Carta"},
	{ id: 3, name: "Intonaco"},
	{ id: 4, name: "Acciaio ceramico"},
	{ id: 5, name: "Acciaio cromato"},
	{ id: 6, name: "Bronzo"}
];

techniques = [
	{ id: 1, name: "Acquarello/ Watercolor" },
	{ id: 2, name: "Aerografo" },
	{ id: 3, name: "Affresco/ Mural Painting" },
	{ id: 4, name: "Acrilico/ Acrylic paint" },
	{ id: 5, name: "Acciaio" },
	{ id: 6, name: "Acciaio arrugginito e verniciato" },
	{ id: 7, name: "Alabastro" },
	{ id: 8, name: "Ardesia" }
];

if(Meteor.isServer && ArtworksTaxonomies.find().fetch().length === 0)
	ArtworksTaxonomies.insert({
		type: artworkTypeTaxonomy,
		"materials": materials,
		"techniques": techniques
	});

/************************* OLD FIXTURES STRUCTURE ************************************************/
artworkType = [
	{	id: 1,
		name: "Dipinto",
		damages: [ 1, 5, 9, 12, 18, 20, 23, 27, 28, 34, 35, 40, 42, 47, 48, 56, 67],
		tecnica: [
			{ id: 1, name: "Acquarello/ Watercolor" },
			{ id: 2, name: "Aerografo" },
			{ id: 3, name: "Affresco/ Mural Painting" },
			{ id: 4, name: "Acrilico/ Acrylic paint" },
			{ id: 5, name: "Emulsione di cera" },
			{ id: 6, name: "Emulsione" },
			{ id: 7, name: "Encausto" },
			{ id: 8, name: "Gouache/ Gouache" },
			{ id: 9, name: "Magna" },
			{ id: 10, name: "Olio/ Oil paint" },
			{ id: 11, name: "Pastello/ Pastel" },
			{ id: 12, name: "Pastelli a cera/ wax crayon" },
			{ id: 13, name: "Pittura vinilica/ Vinilic Painting" },
			{ id: 14, name: "Smalti Industriali" },
			{ id: 15, name: "Tempera/ Tempera ( Tempera a colla, Tempera all’uovo..)" },
			{ id: 16, name: "Vinilico" },
			{ id: 17, name: "¿Cloisonnisme?" },
			{ id: 18, name: "¿Decollage?" },
			{ id: 19, name: "Cera" },
			{ id: 20, name: "Tecnica mista" },
			],
		materials: [
			{ id: 1, name: "Canvas"},
			{ id: 2, name: "Carta"},
			{ id: 3, name: "Intonaco"}
		]
	},
	{ id: 2,
		name: "Disegno",
		damages: [ 1, 5, 14, 18, 35, 36, 40, 41, 42, 46, 47, 48, 56, 58, 69, 71],
		tecnica: [
			{ id: 1, name: "Bistro" },
			{ id: 2, name: "Carboncino" },
			{ id: 3, name: "Carboncino grasso" },
			{ id: 4, name: "Chiaro-scuro" },
			{ id: 5, name: "China" },
			{ id: 6, name: "Chalk?" },
			{ id: 7, name: "China Colorata" },
			{ id: 8, name: "Goffrattura" },
			{ id: 9, name: "Graffite" },
			{ id: 10, name: "Gessetti" },
			{ id: 11, name: "Inchiostro" },
			{ id: 12, name: "Inchiostro Metallotannico" },
			{ id: 13, name: "Lummeggiatura/ Chinese white" },
			{ id: 14, name: "Matita" },
			{ id: 15, name: "Matite acquarellabili" },
			{ id: 16, name: "Matita Copiativa" },
			{ id: 17, name: "Matita grassa" },
			{ id: 18, name: "Miniature" },
			{ id: 19, name: "Mordente" },
			{ id: 20, name: "Pastelli a cera/ Wax Crayon" },
			{ id: 21, name: "Pastello" },
			{ id: 22, name: "Penna Biro" },
			{ id: 23, name: "Pennarello" },
			{ id: 24, name: "Sanguigna" },
			{ id: 25, name: "Wash??" },
		]
	},
	{ id: 3,
		name: "Incisione",
		damages: [ 1, 5, 14, 18, 35, 36, 40, 41, 42, 46, 47, 48, 56, 58, 69, 71],
		tecnica: [
			{ id: 1, name: "Acquaforte" },
			{ id: 2, name: "Acquatinta" },
			{ id: 3, name: "Acquatinta a colori" },
			{ id: 4, name: "Acquatinta allo zucchero" },
			{ id: 5, name: "Bulino" },
			{ id: 6, name: "Camieux" },
			{ id: 7, name: "Chiaro-Scuro" },
			{ id: 8, name: "Chin Collé" },
			{ id: 9, name: "Cliché-verre (Matrice vetro)" },
			{ id: 10, name: "Collografia/Collotype" },
			{ id: 11, name: "Cromolitografia" },
			{ id: 12, name: "Engraving" },
			{ id: 13, name: "Frottage" },
			{ id: 14, name: "Hé Liogravure" },
			{ id: 15, name: "Impresione a rilievo" },
			{ id: 16, name: "Incisione a colori" },
			{ id: 17, name: "Incisione " },
			{ id: 18, name: "Incisione indiretta a granito" },
			{ id: 19, name: "Incisioni su linolium" },
			{ id: 20, name: "Intaglio " },
			{ id: 21, name: "Immagine Trasferita" },
			{ id: 22, name: "Legno policromo stampato su carta" },
			{ id: 23, name: "Litografia " },
			{ id: 24, name: "Litografia a colori" },
			{ id: 25, name: "Litografia a colori su acciaio inox" },
			{ id: 26, name: "Maniera Nera,mezzatinta" },
			{ id: 27, name: "Maniera a levis" },
			{ id: 28, name: "Monotipia" },
			{ id: 29, name: "Oleografia" },
			{ id: 30, name: "Punta Secca" },
			{ id: 31, name: "Puteggiato" },
			{ id: 32, name: "Serigrafia" },
			{ id: 33, name: "Serigrafia a colori" },
			{ id: 34, name: "Stampa Calcografica a Secco" },
			{ id: 35, name: "Stampe Giapponesi" },
			{ id: 36, name: "Stampa simultanea a più colori" },
			{ id: 37, name: "Vernice Molle" },
			{ id: 38, name: "Xilografia" },
			{ id: 39, name: "Zincografia" },
		]
	},
	{ id: 4,
		name: "Scultura",
		damages: [ 1, 5, 15, 17, 19, 23, 27, 32, 35, 37, 40, 47, 55, 57, 58],
		tecnica: [
			{ id: 1, name: "Acciaio" },
			{ id: 2, name: "Acciaio arrugginito e verniciato" },
			{ id: 3, name: "Alabastro" },
			{ id: 4, name: "Ardesia" },
			{ id: 5, name: "Arenaia e pigmenti" },
			{ id: 6, name: "Bronzo" },
			{ id: 7, name: "Bronzo Dorato" },
			{ id: 8, name: "Bronzo, legno e metallo" },
			{ id: 9, name: "Compensato laminato" },
			{ id: 10, name: "Ferro, rete metallica, cera e luce al neon" },
			{ id: 11, name: "Filo di nylon e perspex su base di legno" },
			{ id: 12, name: "Fogli allumini incurvati" },
			{ id: 13, name: "Gesso" },
			{ id: 14, name: "Gesso e ritagli di giornale" },
			{ id: 15, name: "Legno dipinto" },
			{ id: 16, name: "Legno dorato" },
			{ id: 17, name: "Legno parzialmente dipinto" },
			{ id: 18, name: "Legno, ferro e vetro" },
			{ id: 19, name: "Marmo" },
			{ id: 20, name: "Marmo,vetro e metallo" },
			{ id: 21, name: "Oro, smalto ed ebano" },
			{ id: 22, name: "Ottone e plexiglas verde" },
		],
		materials: [
			{ id: 1, name: "Acciaio ceramico"},
			{ id: 2, name: "Acciaio cromato"},
			{ id: 3, name: "Bronzo"}
		]
	},
	{ id: 5,
		name: "Tessile",
		damages: [ 1, 23, 27, 35, 46, 47, 48, 49, 55, 58, 63, 65, 70, 71],
		tecnica: [
			{ id: 1, name: "Taffetas" },
			{ id: 2, name: "Gros de Tours" },
			{ id: 3, name: "Lousine" },
			{ id: 4, name: "Mattè" },
			{ id: 5, name: "Cannellato" },
			{ id: 6, name: "Reps" },
			{ id: 7, name: "Saia" },
			{ id: 8, name: "Raso" },
			{ id: 9, name: "Pekin" },
			{ id: 10, name: "Faille" },
			{ id: 11, name: "Cannellè Simpletè" },
			{ id: 12, name: "Cannetillè" },
			{ id: 13, name: "Poil Trainant" },
			{ id: 14, name: "Lampasso" },
			{ id: 15, name: "Sciamiro" },
			{ id: 16, name: "Taquetè" },
			{ id: 17, name: "Velluto" },
			{ id: 18, name: "Brocatello" },
			{ id: 19, name: "Damasco" },
			{ id: 20, name: "Non identificabile" },
		]
	},
	{ id: 6, name: "Fotografia", damages: [], tecnica: [] },
  { id: 7, name: "Opera tridimensionale", damages: [], tecnica: [] },
	{ id: 8, name: "Arte contemporanea", damages: [], tecnica: [] },
	{ id: 9, name: "Installazione", damages: [], tecnica: [] },
	{ id: 10, name: "Mosaico", damages: [], tecnica: [] },
	{ id: 11, name: "Oggetto di design", damages: [], tecnica: [] },
	{ id: 12, name: "Oreficeria", damages: [], tecnica: [] },
	{ id: 13, name: "Stucchi/Gessi", damages: [], tecnica: [] },
];

artworkTypeLookUp = [];
tecnicaLookUp = [];

for (var i = 0, len = artworkType.length; i < len; i++) {
    artworkTypeLookUp[artworkType[i].id] = artworkType[i];
		tecnicaLookUp[artworkType[i].id] = [];
		//console.log(artworkType[i]);
		for (var l = 0, len2 = artworkType[i].tecnica.length; l < len2; l++) {
			tecnicaLookUp[artworkType[i].id][artworkType[i].tecnica[l].id] = artworkType[i].tecnica[l];
		}
}

damageList = [
{ id: 0, name: "Generic"}, // show "(see details)"" on remark description
{ id: 1, name: "Abrasion" },
{ id: 2, name: "Dent" },
{ id: 3, name: "Loose sewing" },
{ id: 4, name: "Chimical change" },
{ id: 5, name: "Discoloration" },
{ id: 6, name: "Alteration of dye" },
{ id: 7, name: "Alveolizzazione" },
{ id: 8, name: "Pest damage" },
{ id: 9, name: "Woodboring damage " },
{ id: 10, name: "Mold" },
{ id: 11, name: "Bubble" },
{ id: 12, name: "Unregular Shining" },
{ id: 13, name: "Burns" },
{ id: 14, name: "Friable medium" },
{ id: 15, name: "Concration" },
{ id: 16, name: "Consumptive trame" },
{ id: 17, name: "Corrosion" },
{ id: 18, name: "Crazing/Crimp (?)" },
{ id: 19, name: "Glass crizzling" },
{ id: 20, name: "Anthropic damage" },
{ id: 21, name: "Decohesion" },
{ id: 22, name: "Deformation" },
{ id: 23, name: "Warping" },
{ id: 24, name: "Insects droppings" },
{ id: 25, name: "Animal accretions" },
{ id: 26, name: "Depolymerization" },
{ id: 27, name: "Dirt" },
{ id: 28, name: "Adhesion defect" },
{ id: 29, name: "Cohesion defect" },
{ id: 30, name: "disjunction" },
{ id: 31, name: "Detachment" },
{ id: 32, name: "Efflorescence" },
{ id: 33, name: "Digs-Exfoliation" },
{ id: 34, name: "Cracks" },
{ id: 35, name: "Holes" },
{ id: 36, name: "Foxing" },
{ id: 37, name: "Fractures" },
{ id: 38, name: "Dripping" },
{ id: 39, name: "Fading" },
{ id: 40, name: "Scratches" },
{ id: 41, name: "Creases" },
{ id: 42, name: "Finger prints" },
{ id: 43, name: "Encrustation/Fouling (?)" },
{ id: 44, name: "Iridescence" },
{ id: 45, name: "Inscriptions" },
{ id: 46, name: "Tears" },
{ id: 47, name: "Losses" },
{ id: 48, name: "Stains" },
{ id: 49, name: "Gap" },
{ id: 50, name: "Weft losses" },
{ id: 51, name: "Total losses" },
{ id: 52, name: "Nodi passanti" },
{ id: 53, name: "Buckling" },
{ id: 54, name: "Opacification" },
{ id: 55, name: "Oxidation" },
{ id: 56, name: "Folds" },
{ id: 57, name: "Pitting " },
{ id: 58, name: "Previous treatment" },
{ id: 59, name: "Glue residual" },
{ id: 60, name: "Overpaintings" },
{ id: 61, name: "Swelling" },
{ id: 62, name: "Retouching...)" },
{ id: 63, name: "Breaks" },
{ id: 64, name: "Crumbling" },
{ id: 65, name: "Disjoint seams" },
{ id: 66, name: "Sulfuration" },
{ id: 67, name: "Flaking " },
{ id: 68, name: "Lifting embroidery" },
{ id: 69, name: "Fat dirt" },
{ id: 70, name: "Detachment" },
{ id: 71, name: "Cutting" },
{ id: 72, name: "Worn-out" },
];

damageListIt = [
{ id: 0, name: "Generico"}, // show "(see details)"" on remark description
{ id: 1, name: "Abrasione" },
{ id: 2, name: "Ammaccatura" },
{ id: 3, name: "Allentamento cucitura" },
{ id: 4, name: "Alterazione chimiche" },
{ id: 5, name: "Alterazione cromatica" },
{ id: 6, name: "Alterazione del colorante" },
{ id: 7, name: "Alveolizzazione" },
{ id: 8, name: "Attacco biologico" },
{ id: 9, name: "Attacco di insetti xilofagi " },
{ id: 10, name: "Attacco micotico" },
{ id: 11, name: "Bolle" },
{ id: 12, name: "Brillantezze irregolari" },
{ id: 13, name: "Bruciature" },
{ id: 14, name: "Colore Friabile" },
{ id: 15, name: "Concrezione" },
{ id: 16, name: "Consunzioni di trama" },
{ id: 17, name: "Corrosione" },
{ id: 18, name: "Crettatura" },
{ id: 19, name: "Crizzling del vetro" },
{ id: 20, name: "Danni antropici" },
{ id: 21, name: "Decoesione" },
{ id: 22, name: "Deformazione strutturale" },
{ id: 23, name: "Deformazioni" },
{ id: 24, name: "Deiezione da insetti" },
{ id: 25, name: "Deiezioni animali" },
{ id: 26, name: "Depolimerizzazione" },
{ id: 27, name: "Deposito superficiale" },
{ id: 28, name: "Difetti di adesione" },
{ id: 29, name: "Difetti di coesione" },
{ id: 30, name: "Disgiunzione" },
{ id: 31, name: "Distacco" },
{ id: 32, name: "Efflorescenza" },
{ id: 33, name: "Esfoliazioni" },
{ id: 34, name: "Fessurazione" },
{ id: 35, name: "Fori" },
{ id: 36, name: "Foxing" },
{ id: 37, name: "Fratturazione" },
{ id: 38, name: "Gocciolature" },
{ id: 39, name: "Gore" },
{ id: 40, name: "Graffi" },
{ id: 41, name: "Grinze" },
{ id: 42, name: "Impronte digitali" },
{ id: 43, name: "Incrostazione" },
{ id: 44, name: "Iridescenza" },
{ id: 45, name: "Iscrizioni" },
{ id: 46, name: "Lacerazioni" },
{ id: 47, name: "Lacune" },
{ id: 48, name: "Macchie" },
{ id: 49, name: "Mancanza" },
{ id: 50, name: "Mancanze di trama" },
{ id: 51, name: "Mancanze totali (trame+ordito)" },
{ id: 52, name: "Nodi passanti" },
{ id: 53, name: "Ondulazioni" },
{ id: 54, name: "Opacizzazione" },
{ id: 55, name: "Ossidazione" },
{ id: 56, name: "Pieghe" },
{ id: 57, name: "Pitting " },
{ id: 58, name: "Precedente intervento di restauro" },
{ id: 59, name: "Residui di colla" },
{ id: 60, name: "Ridipinture" },
{ id: 61, name: "Rigonfiamento" },
{ id: 62, name: "Ritocchi" },
{ id: 63, name: "Rotture" },
{ id: 64, name: "Sbriciolamento" },
{ id: 65, name: "Scuciture" },
{ id: 66, name: "Solfurazione" },
{ id: 67, name: "Sollevamenti a scaglia " },
{ id: 68, name: "Sollevamenti filati ricamo" },
{ id: 69, name: "Sporco grasso" },
{ id: 70, name: "Stacchi Scuciti" },
{ id: 71, name: "Tagli" },
{ id: 72, name: "Usura" },
];

damageListLookUp = [];
for (var i = 0, len = damageList.length; i < len; i++) {
    damageListLookUp[damageList[i].id] = damageList[i];
}

locationList = [
	{id: 0, level: "", name: "Not specified"},
	{id: 1, level: "A", name: "Protection"},
	{id: 2, level: "B", name: "Surface"},
	{id: 3, level: "C", name: "Support"},
	{id: 4, level: "D", name: "Stretcher"},
	{id: 5, level: "E", name: "Frame"},
	{id: 6, level: "F", name: "Structure"},
	{id: 7, level: "G", name: "Base"},
	{id: 8, level: "H", name: "Lining"},
	{id: 9, level: "I", name: "Mounting"},
	{id: 10, level: "L", name: "Front glazing"},
	{id: 11, level: "M", name: "Back protection"},
	{id: 12, level: "N", name: "Textile assemblage"},
	{id: 13, level: "O", name: "Display case"}
];

locationListLookUp = [];
for (var i = 0, len = locationList.length; i < len; i++) {
    locationListLookUp[locationList[i].id] = locationList[i];
}

colorList = [
	"White",
	"Yellow",
	"Orange",
	"Red",
	"Violet",
	"Royalblue",
	"Cyan",
	"Lime",
	"Black",
];

/*
colorListLookUp = [];
for (var i = 0, len = colorList.length; i < len; i++) {
    colorListLookUp[colorList[i].id] = colorList[i];
}
*/

lineSize = [
	{id: 0, name: "Trasparente" },
	{id: 1, name: "Uno" },
	{id: 2, name: "Due" },
	{id: 3, name: "Tre" },
	{id: 4, name: "Quattro" },
	{id: 5, name: "Cinque" },
];

lineSizeLookUp = [];
for (var i = 0, len = lineSize.length; i < len; i++) {
    lineSizeLookUp[lineSize[i].id] = lineSize[i];
}

patternList = [
	{id: 1, name: "V Line" },
	{id: 2, name: "H Line" },
	{id: 3, name: "Diagonal" },
	{id: 4, name: "Dots" },
	{id: 5, name: "Flowers" },
];

patternListLookUp = [];
for (var i = 0, len = patternList.length; i < len; i++) {
    patternListLookUp[patternList[i].id] = patternList[i];
}

Accessories = [
        "frame",
        "mount",
        "base",
        "manuals",
        "covers",
        "case",
        "belts"
    ];