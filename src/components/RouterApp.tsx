import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Index from './Index';
import About from './About';
import Text from'./Text'

export class RouterApp extends React.Component<{}, {}> {
  public render(){
   return(
        <div>
          <h1>React Redux Router Tutorial</h1>
          <ul role="nav">
            <li><Link to="/index">APP</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/text">Text</Link></li>
          </ul>
          <Route path="/index" component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/text" component={Text}/>
        </div>
    )
  }
}
