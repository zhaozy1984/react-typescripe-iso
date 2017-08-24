import * as React from "react";
export default class HTML extends React.Component<{initialState,innerhtml}, {}> {
  public render(){
    const initState = "window.__INITIAL_STATE__="+JSON.stringify(this.props.initialState);
    return(
      <html>
          <head>
          </head>
          <body>
            <script dangerouslySetInnerHTML={{__html: initState}}></script>
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.innerhtml}}></div>
            <script src="./bundle.js"></script>
          </body>
      </html>
    )
  }
}