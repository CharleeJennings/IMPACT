import express from "express";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router-dom";
import App from "../shared/App";
import React from "react";
import mongoose from "mongoose";
import { typeDefs, resolvers, User, UserSchema, Leader } from "./mongodb/User";
import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import "cross-fetch/polyfill";
import { ApolloProvider } from "@apollo/react-common";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";
import bodyParser from "body-parser";
import flash from "connect-flash";
import serialize from "serialize-javascript";
import { SchemaLink } from "apollo-link-schema";
import { store } from "../shared/redux/store";
import { Provider } from "react-redux";
import { ThemeProvider, ServerStyleSheets } from "@material-ui/styles";
import ReactDOMServer from "react-dom/server";
import theme from "../shared/components/Theme";
import { getDataFromTree } from "react-apollo";


var LocalStrategy = passportLocal.Strategy;

mongoose.connect(
  "mongodb://Charles:ilovemychurch1@ds163822.mlab.com:63822/impact"
);

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.express.use(flash());
server.express.use(bodyParser.urlencoded({ extended: false }));
server.express.use(
  session({
    secret: "Impact",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 200000 }
  })
);

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { status } = err;
  res.status(status).json(err);
};
server.express.use(errorHandler);

server.express.use(passport.initialize());
server.express.use(passport.session());

passport.serializeUser(function(entity, done) {
  done(null, entity.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.deserializeUser(function(id, done) {
  Leader.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(
  new LocalStrategy(function(firstname, password, done) {
    User.findOne({ firstname: firstname }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

server.express.use(cors());
server.express.use(express.static("public"));
server.express.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
    failureFlash: true
  })
);

server.express.get("/home", (req, res, next) => {
  res.send(`<h1> Home </h1>`);
});

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  const preloadedState = store.getState();

  const client = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: new SchemaLink({ UserSchema }),
      credentials: "same-origin",
      headers: {
        cookie: req.header("Cookie")
      }
    }),

    cache: new InMemoryCache()
  });

  const SApp = (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.url} context={req.session}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );

  getDataFromTree(SApp).then(() => {
    // We are ready to render for real
    const content = ReactDOMServer.renderToString(sheets.collect(SApp));
    const css = sheets.toString();
    const initialState = client.extract();

    res.status(200);
    res.send(renderFullPage(content, css, req, initialState));
    res.end();
  });
  // Render the component to a string.
  //
  // const html = ReactDOMServer.renderToString(
  //   sheets.collect(
  //     <Provider store={store}>
  //       <ThemeProvider theme={theme}>
  //         <ApolloProvider client={client}>
  //           <StaticRouter location={req.url} context={req.session}>
  //             <App />
  //           </StaticRouter>
  //         </ApolloProvider>
  //       </ThemeProvider>
  //     </Provider>
  //   )
  // );
  // Grab the CSS from our sheets.

  //
  // Send the rendered page back to the client.
  // res.send(renderFullPage(html, css, req, preloadedState));
}

server.express.get("*", handleRender);

function renderFullPage(content, css, req, preloadedState) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
    	<title> I.M.P.A.C.T </title>
        <style id="jss-server-side">${css}</style>
          <style>  body { background-color : #d1d1d1; min-width: 400px} </style>
            <script async src = '/bundle.js' defer> </script>
              <script>window.__INITIAL_DATA__ = ${serialize(req.session)}
              window.__PRELOADED_STATE__ = ${serialize(preloadedState)}</script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- Fonts to support Material Design -->
          <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="app">${content}</div>
          <script
            dangerouslySetInnerHTML={{
              __html: \`window.__APOLLO_STATE__=${JSON.stringify(
                preloadedState
              ).replace(/</g, "\\u003c")};\`
            }}
          />
      </body>
    </html>
  `;
}

const op = {
  port: process.env.PORT || 3000,
  endpoint: "/graphql"
};

server.start(op, () =>
  console.log(
    "Server running on port " +
      op.port +
      " running in " +
      process.env.NODE_ENV +
      " mode"
  )
);
