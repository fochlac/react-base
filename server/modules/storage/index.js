const deepcopy = require('deepcopy');
let Storage = {
	users: {
		0: {
			id: 0,
			name: 'Hinz',
			posts: [0],
			comments: [],
		},
		1: {
			id: 1,
			name: 'Kunz',
			posts: [],
			comments: [0],
		}
	},
	posts: {
		0: {
			id: 0,
			user: 0,
			title: 'Dolle Wuasd',
			text: 'Rippenbiest und Hammelswade',
			date: 1234567898776,
			comments: [0, 1, 2, 3],
		},
		1: {
			id: 1,
			user: 0,
			title: 'Wohlschmeckende Wuasd',
			text: 'Gulaschkanone mit Auflauf',
			date: 1234567898776,
			comments: [1, 2],
		}
	},
	comments: {
		0: {
			id: 0,
			user: 1,
			text: 'Schmeckt gut!',
			post: 0,
			date: 12345567891011,
		},
		1: {
			id: 1,
			user: 1,
			text: 'Schmeckt sehr gut!',
			post: 1,
			date: 12345567891011,
		},
		2: {
			id: 2,
			user: 1,
			text: 'Schmeckt super gut!',
			post: 1,
			date: 12345567891011,
		},
		3: {
			id: 3,
			user: 1,
			text: 'Schmeckt extrem gut!',
			post: 0,
			date: 12345567891011,
		},
	}
}

module.exports = {
	getCollection: (name) => {
		return {
			getAll: () => deepcopy(Storage[name]),
			getById: (id) => deepcopy(Storage[name][id]),
			setById: (id, val) => Storage[name][id] = val,
			deleteById: (id) => {
				delete Storage[name][id];
			},
			addItem: (obj) => {
				const allIds = Object.keys(Storage[name]).map(key => +key),
					newId = Math.max(...allIds) + 1;

				Storage[name][newId] = {...obj, id: newId};

				return {
					insertId: newId,
					newObj: Storage[name][newId],
				};
			}
		}
	},
	getAllCollections: () => deepcopy(Storage),
}