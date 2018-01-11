import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

const defaultStore = window.defaultStore ? window.defaultStore : { };

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware()
  );

  return store;
};

export const store = configureStore(defaultStore);

