import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

const defaultStore = {
	app: {
		addingAddress: false
	},
	user: {
		name: 'Superuser',
		id: 1
	},
	contacts: {
		1: {
			id: 1,
			name: 'Test Tester',
			address: {
				street: 'Teststreet 5',
				city: '07743 London'
			},
			comments: [1],
			phone: '01234/56789',
		},
	},
	comments: {
		1: {
			id: 1,
			text: 'Hallo Tester du bist doof',
			date: 123456787412,
			userId: 1,
			userName: 'Superuser',
			contactId: 1
		}
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

