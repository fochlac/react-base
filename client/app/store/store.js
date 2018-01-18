import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

const defaultStore = window.defaultStore ? window.defaultStore : {
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
			comments: [0],
		}
	},
	comments: {
		0: {
			id: 0,
			user: 1,
			text: 'Schmeckt gut!',
			post: 0,
			date: 12345567891011,
		}
	},
	app: {
		ĺogin: true,
	},
	user: {
		admin: true,
		id: 0,
	}
};

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware()
  );

  return store;
};

export const store = configureStore(defaultStore);

