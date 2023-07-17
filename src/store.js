import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    users: userReducer,
    products: productReducer,
}), applyMiddleware(thunk));

export default store;
