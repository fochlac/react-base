import { combineReducers } from 'redux';
import { user } from './reducer/user.js';
import { app } from './reducer/app.js';
import { contacts } from './reducer/contacts.js';
import { comments } from './reducer/comments.js';

const reducers = combineReducers({ comments, user, app, contacts });

export default reducers;