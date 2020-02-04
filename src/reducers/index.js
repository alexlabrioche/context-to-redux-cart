import { combineReducers } from 'redux';
import REDUX_THUNK from './thunk.reducers';
import cart from './cart.reducers';

export default combineReducers({ cart, REDUX_THUNK });
