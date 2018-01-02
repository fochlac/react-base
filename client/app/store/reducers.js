import { combineReducers } from 'redux';
import user from './reducers/user.js';

const reducers = combineReducers({
    user
});

export default reducers;