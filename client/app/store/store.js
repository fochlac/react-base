import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';
import { logMiddleware } from './middleware/logger.js';

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
	},
	app: {
		login: true,
	},
	user: {
		admin: true,
		id: 0,
	}
};

export function configureStore(initialState = {}) {
    // from: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(logMiddleware)
        )
    );

  return store;
};

export const store = configureStore(defaultStore);

