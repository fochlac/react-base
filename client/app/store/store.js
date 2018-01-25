import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';
import { actionId } from './middleware/actionId.js';
import { logMiddleware } from './middleware/logger.js';
import { timestamp } from './middleware/timestamp.js';
import { api } from './middleware/api.js';

const defaultStore = window.defaultStore ? window.defaultStore : {
	users: {
	},
	posts: {
	},
	comments: {
	},
	app: {
		login: true,
	},
	user: {
	}
};

export function configureStore(initialState = {}) {
    // from: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(actionId, timestamp, api, logMiddleware)
        )
    );

  return store;
};

export const store = configureStore(defaultStore);

