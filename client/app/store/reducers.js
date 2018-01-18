import { combineReducers } from 'redux';
import app from './reducers/app.js';
import user from './reducers/user.js';
import users from './reducers/users.js';
import posts from './reducers/posts.js';
import comments from './reducers/comments.js';

const reducers = combineReducers({ app, user, users, posts, comments });

export default reducers;