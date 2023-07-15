import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const store = createStore(combineReducers({
    users: userReducer,
    products: productReducer
}));

export default store;
