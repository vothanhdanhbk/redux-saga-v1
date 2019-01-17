import {combineReducers} from 'redux';
import productList from "./productListReducer";

const allReducers =combineReducers({
    productList,
    // add more reducer here
});
export default allReducers;