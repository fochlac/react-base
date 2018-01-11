import { combineReducers } from 'redux';
import user from './reducers/user.js';
import app from './reducers/app.js';

const reducers = combineReducers({
    user, app
});

export default reducers;
