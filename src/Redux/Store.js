import { createStore } from 'redux';
import shoppingReducers from "./reducers/shoppingReducers";

const Store = createStore(shoppingReducers);

export default Store;
