import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

const defaultStore = {
	app: {
		busy: false,
		currentUser: undefined,
	},
	products: {
		1: {
			name: 'testproduct1',
			id: 1,
		},
		2: {
			name: 'testproduct2',
			id: 2,
		}
	}
};

const logMiddleware = store => next => action => {
    console.log(action)
    next(action)
}

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logMiddleware)
  );

  return store;
};

export const store = configureStore(defaultStore);

