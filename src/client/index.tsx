import * as React from "react";
import * as ReactDom from "react-dom";
import { todoApp } from './../reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {RouterApp} from  './../components/RouterApp';
import thunkMiddleware from 'redux-thunk';

declare const __INITIAL_STATE__;
let initialState = {};
if(__INITIAL_STATE__){
    initialState = __INITIAL_STATE__;
}
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(todoApp,initialState);

const dom = document.getElementById('app');

ReactDom.render(<Provider store={store}><BrowserRouter><RouterApp/></BrowserRouter></Provider>,dom);