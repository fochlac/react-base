import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';
import { addActionId } from './middleware/addActionId.js';
import { logMiddleware } from './middleware/logger.js';
import { dateMiddleware } from './middleware/date.js';

const defaultStore = window.defaultStore ? window.defaultStore : {
    user: { }
};

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(addActionId, dateMiddleware, logMiddleware)
  );

  return store;
};

export const store = configureStore(defaultStore);

