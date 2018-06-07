import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';

const defaultStore = {
	app: {
		addingAddress: false,
		isLogged: false,
		showErrorMessage: false,
		text: "",
		filter: 	'',
		sort:	'sortbyName'
	},
	user: {
		name: 'Superuser',
		password: 'test',
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

 const generateID = store => next => action => {
	 const date = Date.now();
	if (action.generateID) { 
		action.generatedID = date;
    }
    console.log("action log")
    console.log(store.getState(), action)
	 next(action)
 }

export function configureStore(initialState = {}) {
    // from: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(logMiddleware, generateID)
        )
    );

  return store;
};


export const store = configureStore(defaultStore);


