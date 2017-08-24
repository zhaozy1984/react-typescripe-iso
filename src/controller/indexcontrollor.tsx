import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as ReactDOMServer from 'react-dom/server'
import APP from '../components/Index';
import StaticRouter from 'react-router/StaticRouter'
import { BrowserRouter} from "react-router-dom";
import { todoApp } from './../reducers/reducers';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {fetchPosts} from '../actions/actions'

import thunkMiddleware from 'redux-thunk'

import {RouterApp} from  './../components/RouterApp';

import HTML from  './../components/HTML';

export const getPages=(req, res, next) => {

  console.log("index-controllor");
  //默认state,可以通过异步方法获得
  let initialState = {visibilityFilter:"SHOW_ACTIVE",todos:[]};//SHOW_ACTIVE SHOW_COMPLETED

  let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
  let store = createStoreWithMiddleware(todoApp,initialState);
  //let store = createStore(todoApp, initialState); 没有使用中间件
  //触发异步action,测试用
  // store.dispatch(fetchPosts('reactjs')).then(() => {
  //     //console.log(store.getState())
  //   }
  // )  
  console.log(req.url);
  const context = {};
  const ssrDom = ReactDOMServer.renderToString(
      <Provider store={store}><StaticRouter location={req.url} context={context}><RouterApp></RouterApp></StaticRouter></Provider>
  )
  const html = ReactDOMServer.renderToString(
    <HTML initialState={initialState} innerhtml={ssrDom}>
    </HTML>
  )
  res.send("<!doctype html>" + html);
  
}