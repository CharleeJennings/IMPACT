import express from 'express';
import {renderToString} from 'react-dom/server';
import {matchPath , StaticRouter } from 'react-router-dom';
import routes from '../shared/routes'
import App from '../shared/App';
import React from 'react'
import mongoose from 'mongoose';
import { typeDefs, resolvers, User, UserSchema }  from './mongodb/User'
import {GraphQLServer} from 'graphql-yoga';
import cors from 'cors'
import 'cross-fetch/polyfill';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-client";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import session from 'express-session'
import passport from 'passport'
import passportLocal from 'passport-local'
import bodyParser from 'body-parser'
import flash from 'connect-flash'
import serialize from 'serialize-javascript'
import { SchemaLink } from 'apollo-link-schema';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';






var LocalStrategy = passportLocal.Strategy;

mongoose.connect("mongodb://Charles:ilovemychurch1@ds163822.mlab.com:63822/impact")


const server = new GraphQLServer ({typeDefs , resolvers})



	server.express.use(flash())
  server.express.use(bodyParser.urlencoded({ extended: false }));
  server.express.use(session({ secret: 'NishaK' , resave: true, saveUninitialized: true, cookie: {maxAge: 60000}}));
  server.express.use(passport.initialize());
  server.express.use(passport.session());

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});

  passport.use(new LocalStrategy(
	  function(firstname, password, done) {
	    User.findOne({ firstname: firstname }, function (err, user) {
	      if (err) { return done(err); }
	      if (!user) {
	        return done(null, false, { message: 'Incorrect username.' });
	      }
	      if (!user.validPassword(password)) {
	        return done(null, false, { message: 'Incorrect password.' });
	      }
	      return done(null, user);
	    });
	  }
	));




server.express.use(cors())

server.express.use(express.static('public'))

server.express.post('/login', passport.authenticate('local', { successRedirect: '/profile',
															 failureRedirect: '/',
															 failureFlash: true }));

server.express.get('/home', (req,res,next) => {
	res.send(`<h1> Home </h1>`)
})



server.express.get( '*', (req, res ,next) => {


	const sheetsRegistry = new SheetsRegistry();

   // Create a sheetsManager instance.
   const sheetsManager = new Map();

   // Create a theme instance.
   const theme = createMuiTheme({
     palette: {
       primary: red,
			 secondary: {main: '#FFFFFF'},
       accent: red,
       type: 'light',
     },
		 typography:
		 {
       useNextVariants: true,
			 fontFamily: ['Raleway'].join(','),
		 }
   });
const generateClassName = createGenerateClassName();

const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
const client = new ApolloClient({
  ssrMode: true,
		// Remember that this is the interface the SSR server will use to connect to the
		// API server, so we need to ensure it isn't firewalled, etc
		link: new SchemaLink({UserSchema}),
		cache: new InMemoryCache(),
	});


const markup = renderToString(
	<JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>

	<MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
	<ApolloProvider client = {client}>
	<StaticRouter location= {req.url} context= {req.session}>
	<App />
	</StaticRouter>
	</ApolloProvider>
	 </MuiThemeProvider>
	  </JssProvider>
	)
  const css = sheetsRegistry.toString()

	res.send (`
		<!DOCTYPE html>
		<html>
			<head>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title> I.M.P.A.C.T </title>
      <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan" rel="stylesheet">
			<link rel="stylesheet" type="text/css" href="/main.css" media="screen" />
			<script src = '/bundle.js' defer> </script>
			<script>window.__INITIAL_DATA__ = ${serialize(req.session)} </script>
			</head>
			<body>
				<div id = 'app'>${markup}</div>
				<style id="jss-server-side">${css}</style>
			</body>

		</html>`)
});



const op =
{
	port:  process.env.PORT || 3000,
	endpoint: '/graphql'
}

server.start(op, () => console.log ('Server running on port ' + op.port + ' running in ' + process.env.NODE_ENV + ' mode'))
