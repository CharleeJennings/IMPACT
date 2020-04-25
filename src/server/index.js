import express from "express";
import App from "../shared/App";
import React from "react";
import ReactDOMServer from "react-dom/server";
import theme from "../shared/components/Theme";
import {matchPath, StaticRouter} from "react-router-dom";
import serialize from "serialize-javascript";
import {StylesProvider, ServerStyleSheets, ThemeProvider, createGenerateClassName} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import * as functions from "firebase-functions";

var app = express();

app.use(express.static("public"));

function handleRender(req, res) {
	const generateClassName = createGenerateClassName();
	const sheets = new ServerStyleSheets();

	const content = ReactDOMServer.renderToString(
		sheets.collect(
			<StylesProvider generateClassName={generateClassName}>
				<ThemeProvider theme={theme}>
					<StaticRouter location={req.url} context={req.session || {}}>
						<App />
					</StaticRouter>
				</ThemeProvider>
			</StylesProvider>
		)
	);
	const css = sheets.toString();
	res.send(renderFullPage(content, css, req, {}));
	res.end();
}

function renderFullPage(content, css, req, preloadedState) {
	return `<!DOCTYPE html>
    <html lang="en">
      <head>
    	<title> I.M.P.A.C.T </title>
        <style id="jss-server-side">${css}</style>
       <style>body {margin: 0px;} </style>
              <script>window.__INITIAL_DATA__ = ${serialize(req.session)}</script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- Fonts to support Material Design -->
          <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
      </head>
	  <body>
	  <script async src = '/bundle.js' defer> </script>
        <div id="app">${content}</div>
      </body>
    </html>
  `;
}

app.get("*", (req, res) => handleRender(req, res));
app.listen(3000);
exports.impact = functions.https.onRequest(app);
