import { combineReducers } from 'redux';
import { user } from './reducer/user.js';
import { app } from './reducer/app.js';

const reducers = combineReducers({ user, app });

export default reducers;