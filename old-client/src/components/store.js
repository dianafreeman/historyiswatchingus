// src/assets/js/store.js
import { createStore, applyMiddleware } from "redux";

import locationHandler from "../reducers";

const initialState = {};


const store = createStore(locationHandler, initialState);
export default store;