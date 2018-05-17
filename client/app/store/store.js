import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

const defaultStore = {
	app: {
		currentPage: ''
	},
	user: {
		name: '',
		age: '',
		address: {}
	}
 };

 const logMiddleware = store => next => action => {
	 console.log(store.getState(), action)

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

