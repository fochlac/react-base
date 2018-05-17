import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

const defaultStore = {
	app: {
		busy: false
	},
	products: {
		1:{
			name: 'testproduct1',
			id: 1
		},
		2:{
			name: 'testproduct2',
			id: 2
		}
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

