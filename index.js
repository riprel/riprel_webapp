import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
// import App from "./App";
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App/components/App';
// import * as serviceWorker from './serviceWorker';


const htmlData = `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Serverlessly Rendered</title>
</head>
<body>
    <div>
      <div id="container"></div>
    </div>
</body>
</html>

`

export const render = (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
    return res.send(
      htmlData.replace('<div id="container"></div>', `<div id="container">${html}</div>`)
    )
}
