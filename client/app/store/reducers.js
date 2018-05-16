import { combineReducers } from 'redux';
import app from './reducer/app.js';
import products from './reducer/products.js';

const reducers = combineReducers({ app, products });

export default reducers;