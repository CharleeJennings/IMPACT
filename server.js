/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mongodb_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mongodb/User */ \"./src/server/mongodb/User.js\");\n/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-yoga */ \"graphql-yoga\");\n/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_yoga__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cross-fetch/polyfill */ \"cross-fetch/polyfill\");\n/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(connect_flash__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! apollo-link-schema */ \"apollo-link-schema\");\n/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(apollo_link_schema__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _shared_redux_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/redux/store */ \"./src/shared/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _shared_redux_reducer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/redux/reducer */ \"./src/shared/redux/reducer.js\");\n/* harmony import */ var _shared_redux_reducer__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_shared_redux_reducer__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _shared_components_Theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/components/Theme */ \"./src/shared/components/Theme.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LocalStrategy = passport_local__WEBPACK_IMPORTED_MODULE_17___default.a.Strategy;\nmongoose__WEBPACK_IMPORTED_MODULE_6___default.a.connect(\"mongodb://Charles:ilovemychurch1@ds163822.mlab.com:63822/impact\");\nvar server = new graphql_yoga__WEBPACK_IMPORTED_MODULE_8__[\"GraphQLServer\"]({\n  typeDefs: _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"typeDefs\"],\n  resolvers: _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"resolvers\"]\n});\nserver.express.use(connect_flash__WEBPACK_IMPORTED_MODULE_19___default()());\nserver.express.use(body_parser__WEBPACK_IMPORTED_MODULE_18___default.a.urlencoded({\n  extended: false\n}));\nserver.express.use(express_session__WEBPACK_IMPORTED_MODULE_15___default()({\n  secret: \"Impact\",\n  resave: true,\n  saveUninitialized: true,\n  cookie: {\n    maxAge: 200000\n  }\n}));\n\nvar errorHandler = function errorHandler(err, req, res, next) {\n  if (res.headersSent) {\n    return next(err);\n  }\n\n  var status = err.status;\n  res.status(status).json(err);\n};\n\nserver.express.use(errorHandler);\nserver.express.use(passport__WEBPACK_IMPORTED_MODULE_16___default.a.initialize());\nserver.express.use(passport__WEBPACK_IMPORTED_MODULE_16___default.a.session());\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.serializeUser(function (entity, done) {\n  done(null, entity.id);\n});\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.deserializeUser(function (id, done) {\n  _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"User\"].findById(id, function (err, user) {\n    done(err, user);\n  });\n});\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.deserializeUser(function (id, done) {\n  _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"Leader\"].findById(id, function (err, user) {\n    done(err, user);\n  });\n});\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.use(new LocalStrategy(function (firstname, password, done) {\n  _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"User\"].findOne({\n    firstname: firstname\n  }, function (err, user) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!user) {\n      return done(null, false, {\n        message: \"Incorrect username.\"\n      });\n    }\n\n    if (!user.validPassword(password)) {\n      return done(null, false, {\n        message: \"Incorrect password.\"\n      });\n    }\n\n    return done(null, user);\n  });\n}));\nserver.express.use(cors__WEBPACK_IMPORTED_MODULE_9___default()());\nserver.express.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"public\"));\nserver.express.post(\"/login\", passport__WEBPACK_IMPORTED_MODULE_16___default.a.authenticate(\"local\", {\n  successRedirect: \"/profile\",\n  failureRedirect: \"/\",\n  failureFlash: true\n}));\nserver.express.get(\"/home\", function (req, res, next) {\n  res.send(\"<h1> Home </h1>\");\n});\n\nfunction handleRender(req, res) {\n  var sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_27__[\"ServerStyleSheets\"]();\n  var preloadedState = _shared_redux_store__WEBPACK_IMPORTED_MODULE_24__[\"store\"].getState();\n  var client = new apollo_client__WEBPACK_IMPORTED_MODULE_12___default.a({\n    ssrMode: true,\n    // Remember that this is the interface the SSR server will use to connect to the\n    // API server, so we need to ensure it isn't firewalled, etc\n    link: Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_13__[\"createHttpLink\"])({\n      uri: \"http://localhost:3000/graphql\",\n      credentials: \"same-origin\",\n      headers: {\n        cookie: req.header(\"Cookie\")\n      }\n    }),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__[\"InMemoryCache\"]()\n  });\n  var SApp = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_25__[\"Provider\"], {\n    store: _shared_redux_store__WEBPACK_IMPORTED_MODULE_24__[\"store\"]\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_27__[\"ThemeProvider\"], {\n    theme: _shared_components_Theme__WEBPACK_IMPORTED_MODULE_29__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__[\"ApolloProvider\"], {\n    client: client\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: req.session\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))));\n  Object(react_apollo__WEBPACK_IMPORTED_MODULE_11__[\"getDataFromTree\"])(SApp).then(function () {\n    // We are ready to render for real\n    var content = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(sheets.collect(SApp));\n    var css = sheets.toString();\n    var initialState = client.extract();\n    res.status(200);\n    res.send(renderFullPage(content, css, req, initialState));\n    res.end();\n  }); // Render the component to a string.\n  //\n  // const html = ReactDOMServer.renderToString(\n  //   sheets.collect(\n  //     <Provider store={store}>\n  //       <ThemeProvider theme={theme}>\n  //         <ApolloProvider client={client}>\n  //           <StaticRouter location={req.url} context={req.session}>\n  //             <App />\n  //           </StaticRouter>\n  //         </ApolloProvider>\n  //       </ThemeProvider>\n  //     </Provider>\n  //   )\n  // );\n  // Grab the CSS from our sheets.\n  //\n  // Send the rendered page back to the client.\n  // res.send(renderFullPage(html, css, req, preloadedState));\n}\n\nserver.express.get(\"*\", handleRender);\n\nfunction renderFullPage(content, css, req, preloadedState) {\n  return \" <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n    \\t<title> I.M.P.A.C.T </title>\\n        <style id=\\\"jss-server-side\\\">\".concat(css, \"</style>\\n          <style>  body { background-color : #d1d1d1; min-width: 400px} </style>\\n            <script async src = '/bundle.js' defer> </script>\\n              <script>window.__INITIAL_DATA__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_20___default()(req.session), \"\\n              window.__PRELOADED_STATE__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_20___default()(preloadedState), \"</script>\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\" />\\n        <!-- Fonts to support Material Design -->\\n          <link href=\\\"https://fonts.googleapis.com/css?family=Baloo+Chettan\\\" rel=\\\"stylesheet\\\">\\n      </head>\\n      <body>\\n        <div id=\\\"app\\\">\").concat(content, \"</div>\\n          <script\\n            dangerouslySetInnerHTML={{\\n              __html: `window.__APOLLO_STATE__=\").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \";`\\n            }}\\n          />\\n      </body>\\n    </html>\\n  \");\n}\n\nvar op = {\n  port: process.env.PORT || 3000,\n  endpoint: \"/graphql\"\n};\nserver.start(op, function () {\n  return console.log(\"Server running on port \" + op.port + \" running in \" + \"development\" + \" mode\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/mongodb/User.js":
/*!************************************!*\
  !*** ./src/server/mongodb/User.js ***!
  \************************************/
/*! exports provided: typeDefs, UserSchema, User, resolvers, Leader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserSchema\", function() { return UserSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Leader\", function() { return Leader; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_iso_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-iso-date */ \"graphql-iso-date\");\n/* harmony import */ var graphql_iso_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_iso_date__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar typeDefs = \"\\ntype Query\\n{\\n\\tusers: [User]\\n\\tfetchUser(id: ID!) : User\\n  leaders: [Leader]\\n}\\ntype User\\n{\\n\\tid: ID!\\n  firstname : String!\\n  lastname : String!\\n\\temail : String!\\n\\tpassword : String!\\n\\tadmin : Boolean\\n\\tpoints : Int\\n\\tbirthday: String!\\n}\\n\\ntype Leader{\\n\\n\\n  email: String\\n  firstname: String!\\n  lastname: String\\n  password: String!\\n}\\n\\ntype Mutation{\\n\\tcreateUser(firstname: String!, lastname: String!, email : String!, password: String!, admin: Boolean ,  points: Int) : User\\n\\tupdateAccess (id: ID!, accessCode : String!) : User\\n\\tupdateAdmin(id: ID!, admin: Boolean!) : User\\n\\tdeleteUser(id:ID!) : User\\n\\tdeleteAllUser : User\\n  createLeader(firstname: String!, lastname: String!, password: String!) : Leader\\n\\n}\\n\\n\";\nvar LeaderSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: String,\n  firstname: String,\n  lastname: String,\n  password: String\n});\nvar UserSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: String,\n  firstname: String,\n  lastname: String,\n  password: String,\n  admin: Boolean,\n  points: Number,\n  birthday: {\n    type: Date,\n    \"default\": Date\n  }\n});\n\nLeaderSchema.methods.validPassword = function (pwd) {\n  return pwd == this.password;\n};\n\nUserSchema.methods.validPassword = function (pwd) {\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(pwd, this.password);\n};\n\nvar Leader = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Leaders\", LeaderSchema);\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"user\", UserSchema);\nvar resolvers = {\n  Query: {\n    users: function users() {\n      return User.find();\n    },\n    fetchUser: function () {\n      var _fetchUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(_, _ref) {\n        var id, sessionUser;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                id = _ref.id;\n                sessionUser = {};\n                _context.next = 4;\n                return User.findById(id, function (err, user) {\n                  sessionUser = user;\n                });\n\n              case 4:\n                return _context.abrupt(\"return\", sessionUser);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function fetchUser(_x, _x2) {\n        return _fetchUser.apply(this, arguments);\n      }\n\n      return fetchUser;\n    }()\n  },\n  Mutation: {\n    createUser: function () {\n      var _createUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(_, _ref2) {\n        var firstname, lastname, email, password, dup, salt, hash, user;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                firstname = _ref2.firstname, lastname = _ref2.lastname, email = _ref2.email, password = _ref2.password;\n                dup = false;\n                _context2.next = 4;\n                return User.findOne({\n                  firstname: firstname,\n                  lastname: lastname\n                }, function (err, res) {\n                  if (err) {\n                    console.log(\"Error in connecting to MongoDB\");\n                  } else if (res) {\n                    dup = true;\n                  }\n                });\n\n              case 4:\n                if (!dup) {\n                  _context2.next = 9;\n                  break;\n                }\n\n                console.log(\"Duplicate found on Database found on the name: \" + firstname + \" \" + lastname);\n                return _context2.abrupt(\"return\", null);\n\n              case 9:\n                salt = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSaltSync(10);\n                hash = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(password, salt);\n                user = new User({\n                  firstname: firstname,\n                  lastname: lastname,\n                  email: email,\n                  password: hash,\n                  points: 0\n                });\n                _context2.next = 14;\n                return user.save();\n\n              case 14:\n                return _context2.abrupt(\"return\", user);\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function createUser(_x3, _x4) {\n        return _createUser.apply(this, arguments);\n      }\n\n      return createUser;\n    }(),\n    updateAccess: function () {\n      var _updateAccess = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(_, _ref3) {\n        var id, accessCode;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                id = _ref3.id, accessCode = _ref3.accessCode;\n                _context3.next = 3;\n                return User.findByIdAndUpdate(id, {\n                  accessCode: accessCode\n                });\n\n              case 3:\n                return _context3.abrupt(\"return\", true);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function updateAccess(_x5, _x6) {\n        return _updateAccess.apply(this, arguments);\n      }\n\n      return updateAccess;\n    }(),\n    updateAdmin: function () {\n      var _updateAdmin = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(_, _ref4) {\n        var id, admin;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                id = _ref4.id, admin = _ref4.admin;\n                _context4.next = 3;\n                return User.findByIdAndUpdate(id, {\n                  admin: admin\n                });\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function updateAdmin(_x7, _x8) {\n        return _updateAdmin.apply(this, arguments);\n      }\n\n      return updateAdmin;\n    }(),\n    deleteUser: function () {\n      var _deleteUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee5(_, _ref5) {\n        var id;\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                id = _ref5.id;\n                _context5.next = 3;\n                return User.findByIdAndRemove(id);\n\n              case 3:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      function deleteUser(_x9, _x10) {\n        return _deleteUser.apply(this, arguments);\n      }\n\n      return deleteUser;\n    }(),\n    deleteAllUser: function () {\n      var _deleteAllUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee6(_) {\n        return regeneratorRuntime.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return User.deleteMany();\n\n              case 2:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      function deleteAllUser(_x11) {\n        return _deleteAllUser.apply(this, arguments);\n      }\n\n      return deleteAllUser;\n    }(),\n    createLeader: function () {\n      var _createLeader = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee7(_, _ref6) {\n        var firstname, lastname, password, lead;\n        return regeneratorRuntime.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                firstname = _ref6.firstname, lastname = _ref6.lastname, password = _ref6.password;\n                lead = new Leader({\n                  firstname: firstname,\n                  lastname: lastname,\n                  password: password\n                });\n                _context7.next = 4;\n                return lead.save();\n\n              case 4:\n                return _context7.abrupt(\"return\", lead);\n\n              case 5:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7);\n      }));\n\n      function createLeader(_x12, _x13) {\n        return _createLeader.apply(this, arguments);\n      }\n\n      return createLeader;\n    }()\n  }\n};\n\n\n//# sourceURL=webpack:///./src/server/mongodb/User.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        Component = _ref.component,\n        rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      key: path,\n      path: path,\n      exact: exact,\n      render: function render(props) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest));\n      }\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Route not Found \");\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/components/DateField.js":
/*!********************************************!*\
  !*** ./src/shared/components/DateField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DatePickers; });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/pickers */ \"@material-ui/pickers\");\n/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  grid: {\n    width: '60%'\n  }\n});\nfunction DatePickers() {\n  // The first commit of Material-UI\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new Date('2014-08-18T21:11:54')),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      selectedDate = _React$useState2[0],\n      setSelectedDate = _React$useState2[1];\n\n  var classes = useStyles();\n\n  function handleDateChange(date) {\n    setSelectedDate(date);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__[\"MuiPickersUtilsProvider\"], {\n    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4___default.a\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    container: true,\n    className: classes.grid,\n    justify: \"space-around\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__[\"KeyboardDatePicker\"], {\n    margin: \"normal\",\n    id: \"mui-pickers-date\",\n    label: \"Date picker\",\n    value: selectedDate,\n    onChange: handleDateChange,\n    KeyboardButtonProps: {\n      'aria-label': 'change date'\n    }\n  })));\n}\n\n//# sourceURL=webpack:///./src/shared/components/DateField.js?");

/***/ }),

/***/ "./src/shared/components/Login-Student.js":
/*!************************************************!*\
  !*** ./src/shared/components/Login-Student.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Error */ \"@material-ui/icons/Error\");\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_9__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    button: {\n      margin: theme.spacing.unit\n    },\n    card: {\n      minWidth: 205,\n      width: 300,\n      padding: 50\n    },\n    container: {\n      position: \"relative\",\n      top: 150\n    },\n    textField: {},\n    dense: {\n      marginTop: 19\n    },\n    menu: {\n      width: 200\n    },\n    header: {\n      fontSize: 30\n    },\n    tree: {\n      width: 250,\n      postion: \"relative\",\n      height: 250\n    }\n  };\n};\n\nvar TextFields =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TextFields, _React$Component);\n\n  function TextFields(props) {\n    var _this;\n\n    _classCallCheck(this, TextFields);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextFields).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      var name = event.target.name;\n\n      _this.setState(_defineProperty({}, name, event.target.value));\n    });\n\n    _this.state = {\n      username: \"\",\n      password: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(TextFields, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        container: true,\n        direction: \"column\",\n        justify: \"space-evenly\",\n        alignItems: \"center\",\n        className: classes.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        className: classes.header\n      }, \" \", \"IMPACT the next Generation\", \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"./images/Tree.svg\",\n        className: classes.tree\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        noValidate: true,\n        autoComplete: \"off\",\n        method: \"post\",\n        action: \"/login\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        container: true,\n        direction: \"column\",\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        className: classes.card\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        id: \"standard-name\",\n        label: \"Name\",\n        name: \"username\",\n        className: classes.textField,\n        value: this.state.name,\n        onChange: this.handleChange,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        id: \"standard-name\",\n        label: \"Password\",\n        name: \"password\",\n        className: classes.textField,\n        value: this.state.name,\n        onChange: this.handleChange\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        variant: \"contained\",\n        color: \"primary\",\n        className: classes.button,\n        type: \"submit\"\n      }, \"Log In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        variant: \"contained\",\n        color: \"primary\",\n        className: classes.button,\n        href: \"/signup\"\n      }, \"Sign up\")));\n    }\n  }]);\n\n  return TextFields;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nTextFields.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(TextFields));\n\n//# sourceURL=webpack:///./src/shared/components/Login-Student.js?");

/***/ }),

/***/ "./src/shared/components/Profile.js":
/*!******************************************!*\
  !*** ./src/shared/components/Profile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose/compose */ \"recompose/compose\");\n/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/action */ \"./src/shared/redux/action.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query FetchUser($id: ID!) {\\n    fetchUser(id: $id) {\\n      firstname\\n      password\\n      lastname\\n      points\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar FETCH_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());\n\nvar styles = function styles(theme) {\n  return {\n    container: {\n      height: \"100vh\"\n    },\n    card: {},\n    profile: {\n      height: 200\n    },\n    root: {\n      flexGrow: 1\n    }\n  };\n};\n\nvar Profile_page =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Profile_page, _React$Component);\n\n  function Profile_page(props) {\n    var _this;\n\n    _classCallCheck(this, Profile_page);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile_page).call(this, props));\n    var data;\n\n    if (false) {} else {\n      data = props.staticContext;\n    }\n\n    _this.state = {\n      data: data\n    };\n    return _this;\n  }\n\n  _createClass(Profile_page, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n      var data = this.state.data;\n\n      if (data.passport) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__[\"Query\"], {\n          query: FETCH_USER,\n          variables: {\n            id: data.passport.user\n          }\n        }, function (_ref) {\n          var loading = _ref.loading,\n              error = _ref.error,\n              data = _ref.data;\n          if (loading) return \"Loading\";\n          if (error) return \"Error \".concat(error);\n\n          _this2.props.addUser(data.fetchUser);\n\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            container: true,\n            fluid: true,\n            direction: \"row\"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            item: true\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, {\n            xs: 12\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n            className: classes.container\n          }, \"Hello \", data.fetchUser.firstname, \", you have\", \" \", data.fetchUser.points, \" points accumulated!\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            item: true\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            className: classes.card,\n            xs: 12\n          }, \"Hello\")));\n        });\n      } else if (true) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: classes.root\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          container: true,\n          spacing: 16,\n          alignItems: \"center\",\n          className: classes.container\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          item: true,\n          xs: 6\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, null, \"Competion\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          item: true,\n          xs: 6\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, {\n          className: classes.profile\n        }, \"Profile For Student\"))));\n      } else {}\n    }\n  }]);\n\n  return Profile_page;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nProfile_page.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n}; //REDUX MAP CONNECTION\n\nvar mapStatetoProps = function mapStatetoProps(state) {\n  return {\n    firstname: state.fname,\n    user: state.user\n  };\n};\n\nvar mapDispatchtoProps = function mapDispatchtoProps(dispatch) {\n  return {\n    addFirst: function addFirst(name) {\n      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_7__[\"addFirstname\"])(name));\n    },\n    addUser: function addUser(user) {\n      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_7__[\"addUser\"])(user));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_6___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles, {\n  name: \"Profile_page\"\n}), Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(mapStatetoProps, mapDispatchtoProps))(Profile_page));\n\n//# sourceURL=webpack:///./src/shared/components/Profile.js?");

/***/ }),

/***/ "./src/shared/components/SignUp.js":
/*!*****************************************!*\
  !*** ./src/shared/components/SignUp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Input */ \"@material-ui/core/Input\");\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Error */ \"@material-ui/icons/Error\");\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Stepper */ \"@material-ui/core/Stepper\");\n/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Step */ \"@material-ui/core/Step\");\n/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/StepLabel */ \"@material-ui/core/StepLabel\");\n/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Fab */ \"@material-ui/core/Fab\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ \"@material-ui/icons/ArrowBack\");\n/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ \"@material-ui/core/MobileStepper\");\n/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ \"@material-ui/icons/KeyboardArrowLeft\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ \"@material-ui/icons/KeyboardArrowRight\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-swipeable-views */ \"react-swipeable-views\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _DateField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./DateField */ \"./src/shared/components/DateField.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  mutation(\\n    $firstname: String!\\n    $lastname: String!\\n    $email: String!\\n    $password: String!\\n  ) {\\n    createUser(\\n      firstname: $firstname\\n      lastname: $lastname\\n      email: $email\\n      password: $password\\n    ) {\\n      firstname\\n      lastname\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ////////////\n//Style\n////////////\n\nvar styles = function styles(theme) {\n  return {\n    fields: {\n      padding: 15\n    },\n    root: {\n      width: \"90%\"\n    },\n    back: {\n      position: \"relative\",\n      left: -70,\n      top: 50\n    },\n    paper: {\n      minWidth: 400,\n      maxWidth: 400,\n      height: 200,\n      padding: 20\n    },\n    button: {\n      margin: theme.spacing.unit\n    },\n    container: {\n      marginTop: 100\n    },\n    container2: {\n      position: \"relative\"\n    },\n    step: {\n      minWidth: 350,\n      width: \"90%\",\n      maxWidth: 800,\n      backgroundColor: \"transparent\"\n    }\n  };\n}; /////////////////////////////\n// GraphQL Add User Mutation\n////////////////////////////\n\n\nvar ADD_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()); ///////////////////////\n//Stepper Functions\n///////////////////////\n\nfunction getSteps() {\n  return [\"Name\", \"Email\", \"Pin\", \"Birthday\", \"Done\"];\n}\n\nfunction getStepContent(step) {\n  switch (step) {\n    case 0:\n      return \"Please enter your full name\";\n\n    case 1:\n      return \"Please fill out your email\";\n\n    case 2:\n      return \"Confirm a pin.\";\n\n    case 3:\n      return \"We would like to know your birthday!\";\n\n    default:\n      return \"Review\";\n  }\n} //////////////////\n//Custom Code\n/////////////////\n\n\nvar tutorialSteps = [{\n  label: \"Name\",\n  fields: [{\n    field: \"Firstname\"\n  }, {\n    field: \"Lastname\"\n  }]\n}, {\n  label: \"Email\",\n  validation: true,\n  fields: [{\n    field: \"Email\"\n  }, {\n    field: \"Confirm Email\"\n  }]\n}, {\n  label: \"Password\",\n  validation: true,\n  fields: [{\n    field: \"Password\"\n  }, {\n    field: \"Confirm Password\"\n  }]\n}];\n\nfunction compare(field1, field2) {\n  var length = field1.length;\n  var buffer = field2.substring(0, length);\n\n  if (field1 === buffer) {\n    return true;\n  } else {\n    return false;\n  }\n} //////////////////////\n//Rendered Componenet\n//////////////////////\n\n\nfunction SignUp(props) {\n  var _this = this;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      student = _React$useState2[0],\n      setStudent = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      animating = _React$useState4[0],\n      setAnimating = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),\n      _React$useState6 = _slicedToArray(_React$useState5, 2),\n      activeStep = _React$useState6[0],\n      setActiveStep = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(new Set()),\n      _React$useState8 = _slicedToArray(_React$useState7, 2),\n      skipped = _React$useState8[0],\n      setSkipped = _React$useState8[1];\n\n  var steps = getSteps();\n  var maxSteps = tutorialSteps.length;\n\n  function handleStepChange(step) {\n    setActiveStep(step);\n  }\n\n  function isStepOptional(step) {\n    return step === 9;\n  }\n\n  function isStepSkipped(step) {\n    return skipped.has(step);\n  }\n\n  function handleNext() {\n    var newSkipped = skipped;\n\n    if (isStepSkipped(activeStep)) {\n      newSkipped = new Set(newSkipped.values());\n      newSkipped[\"delete\"](activeStep);\n    }\n\n    setActiveStep(function (prevActiveStep) {\n      return prevActiveStep + 1;\n    });\n    setSkipped(newSkipped);\n  }\n\n  function handleBack() {\n    setActiveStep(function (prevActiveStep) {\n      return prevActiveStep - 1;\n    });\n  }\n\n  function handleSkip() {\n    if (!isStepOptional(activeStep)) {\n      // You probably want to guard against something like this,\n      // it should never occur unless someone's actively trying to break something.\n      throw new _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_12___default.a(\"You can't skip a step that isn't optional.\");\n    }\n\n    setActiveStep(function (prevActiveStep) {\n      return prevActiveStep + 1;\n    });\n    setSkipped(function (prevSkipped) {\n      var newSkipped = new Set(prevSkipped.values());\n      newSkipped.add(activeStep);\n      return newSkipped;\n    });\n  }\n\n  function handleReset() {\n    setActiveStep(0);\n  }\n\n  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      _useState2 = _slicedToArray(_useState, 2),\n      firstname = _useState2[0],\n      setFirstname = _useState2[1];\n\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    container: true,\n    alignContent: \"center\",\n    alignItems: \"center\",\n    direction: \"column\",\n    className: classes.container\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_14___default.a, {\n    activeStep: activeStep,\n    className: classes.step\n  }, steps.map(function (label, index) {\n    var stepProps = {};\n    var labelProps = {};\n\n    if (isStepOptional(index)) {\n      labelProps.optional = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default.a, {\n        variant: \"caption\"\n      }, \"Optional\");\n    }\n\n    if (isStepSkipped(index)) {\n      stepProps.completed = false;\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_15___default.a, _extends({\n      key: label\n    }, stepProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_16___default.a, labelProps, label));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17___default.a, null, getStepContent(activeStep))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    item: true,\n    xs: 12\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_19___default.a, {\n    className: classes.back,\n    size: \"small\",\n    color: \"primary\",\n    href: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18___default.a, {\n    className: classes.paper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__[\"Mutation\"], {\n    mutation: ADD_USER\n  }, function (createUser, _ref) {\n    var data = _ref.data,\n        loading = _ref.loading,\n        error = _ref.error;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: function onSubmit(e) {\n        e.preventDefault();\n        createUser({\n          variables: {\n            firstname: _this.state.firstname,\n            lastname: _this.state.lastname,\n            email: _this.state.email,\n            password: _this.state.password\n          }\n        });\n        console.log(data);\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_24___default.a, {\n      axis: theme.direction === \"rtl\" ? \"x-reverse\" : \"x\",\n      index: activeStep,\n      onChangeIndex: handleStepChange,\n      enableMouseEvents: true\n    }, tutorialSteps.map(function (step, index) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: step.label\n      }, Math.abs(activeStep - index) <= 2 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        container: true,\n        alignContent: \"center\",\n        alignItems: \"center\",\n        direction: \"column\"\n      }, step.fields.map(function (field, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          item: true,\n          xs: 6,\n          className: classes.fields\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          label: field.field\n        }));\n      })) : null);\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateField__WEBPACK_IMPORTED_MODULE_25__[\"default\"], null)));\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: 30\n    }\n  }, activeStep === steps.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClick: handleReset\n  }, \"Submit\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    disabled: activeStep === 0,\n    onClick: handleBack\n  }, \"Back\"), isStepOptional(activeStep) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: handleSkip\n  }, \"Skip\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: handleNext\n  }, activeStep === steps.length - 1 ? \"Finish\" : \"Next\")))));\n}\n\nSignUp.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,\n  endpoint: \"/\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__[\"graphql\"])(ADD_USER, {\n  name: \"createUser\"\n})(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(SignUp)));\n\n//# sourceURL=webpack:///./src/shared/components/SignUp.js?");

/***/ }),

/***/ "./src/shared/components/SignUpStepper.js":
/*!************************************************!*\
  !*** ./src/shared/components/SignUpStepper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ \"@material-ui/core/MobileStepper\");\n/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ \"@material-ui/icons/KeyboardArrowLeft\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ \"@material-ui/icons/KeyboardArrowRight\");\n/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views */ \"react-swipeable-views\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-swipeable-views-utils */ \"react-swipeable-views-utils\");\n/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_9__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar AutoPlaySwipeableViews = Object(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_9__[\"autoPlay\"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default.a);\nvar tutorialSteps = [{\n  label: 'San Francisco – Oakland Bay Bridge, United States',\n  imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'\n}, {\n  label: 'Bird',\n  imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'\n}, {\n  label: 'Bali, Indonesia',\n  imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'\n}, {\n  label: 'NeONBRAND Digital Marketing, Las Vegas, United States',\n  imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'\n}, {\n  label: 'Goč, Serbia',\n  imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'\n}];\nvar useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      maxWidth: 400,\n      flexGrow: 1\n    },\n    header: {\n      display: 'flex',\n      alignItems: 'center',\n      height: 50,\n      paddingLeft: 4,\n      backgroundColor: theme.palette.background[\"default\"]\n    },\n    img: {\n      height: 255,\n      display: 'block',\n      maxWidth: 400,\n      overflow: 'hidden',\n      width: '100%'\n    }\n  };\n});\n\nfunction SwipeableTextMobileStepper(props) {\n  var classes = useStyles();\n  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[\"useTheme\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      activeStep = _React$useState2[0],\n      setActiveStep = _React$useState2[1];\n\n  var maxSteps = tutorialSteps.length;\n\n  function handleNext() {\n    setActiveStep(function (prevActiveStep) {\n      return prevActiveStep + 1;\n    });\n  }\n\n  function handleBack() {\n    setActiveStep(function (prevActiveStep) {\n      return prevActiveStep - 1;\n    });\n  }\n\n  function handleStepChange(step) {\n    setActiveStep(step);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    square: true,\n    elevation: 0,\n    className: classes.header\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, null, tutorialSteps[activeStep].label)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwipeableTextMobileStepper);\n\n//# sourceURL=webpack:///./src/shared/components/SignUpStepper.js?");

/***/ }),

/***/ "./src/shared/components/Theme.js":
/*!****************************************!*\
  !*** ./src/shared/components/Theme.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/blue */ \"@material-ui/core/colors/blue\");\n/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1___default.a,\n    secondary: {\n      main: '#FFFFFF'\n    },\n    accent: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_1___default.a,\n    type: 'light'\n  },\n  typography: {\n    useNextVariants: true,\n    fontFamily: ['Baloo Chettan', 'Raleway'].join(',')\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./src/shared/components/Theme.js?");

/***/ }),

/***/ "./src/shared/redux/action.js":
/*!************************************!*\
  !*** ./src/shared/redux/action.js ***!
  \************************************/
/*! exports provided: addFirstname, addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFirstname\", function() { return addFirstname; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUser\", function() { return addUser; });\nfunction addFirstname(text) {\n  return {\n    type: \"ADD_FIRSTNAME\",\n    text: text\n  };\n}\nfunction addUser(user) {\n  return {\n    type: \"ADD_USER\",\n    user: user\n  };\n}\n\n//# sourceURL=webpack:///./src/shared/redux/action.js?");

/***/ }),

/***/ "./src/shared/redux/reducer.js":
/*!*************************************!*\
  !*** ./src/shared/redux/reducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/shared/redux/reducer.js?");

/***/ }),

/***/ "./src/shared/redux/store.js":
/*!***********************************!*\
  !*** ./src/shared/redux/store.js ***!
  \***********************************/
/*! exports provided: reducer, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\nvar initialState = {\n  fname: \"\",\n  user: {}\n};\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_FIRSTNAME\":\n      return Object.assign({}, state, {\n        fname: action.text\n      });\n\n    case \"ADD_USER\":\n      return Object.assign({}, state, {\n        user: action.user\n      });\n\n    default:\n      return state;\n  }\n}\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer);\n\n//# sourceURL=webpack:///./src/shared/redux/store.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Login_Student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Login-Student */ \"./src/shared/components/Login-Student.js\");\n/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SignUp */ \"./src/shared/components/SignUp.js\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Profile */ \"./src/shared/components/Profile.js\");\n/* harmony import */ var _components_SignUpStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SignUpStepper */ \"./src/shared/components/SignUpStepper.js\");\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _components_Login_Student__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/profile',\n  exact: true,\n  component: _components_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/signup',\n  exact: true,\n  component: _components_SignUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/step',\n  exact: true,\n  component: _components_SignUpStepper__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi @babel/polyfill ./src/server/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@date-io/date-fns\");\n\n//# sourceURL=webpack:///external_%22@date-io/date-fns%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CssBaseline%22?");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Fab%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Input\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Input%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/MobileStepper":
/*!**************************************************!*\
  !*** external "@material-ui/core/MobileStepper" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MobileStepper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MobileStepper%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Step":
/*!*****************************************!*\
  !*** external "@material-ui/core/Step" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Step\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Step%22?");

/***/ }),

/***/ "@material-ui/core/StepLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/StepLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/StepLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/StepLabel%22?");

/***/ }),

/***/ "@material-ui/core/Stepper":
/*!********************************************!*\
  !*** external "@material-ui/core/Stepper" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Stepper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Stepper%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors/blue":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/blue" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/blue\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/blue%22?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ArrowBack\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ArrowBack%22?");

/***/ }),

/***/ "@material-ui/icons/Error":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Error" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Error\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Error%22?");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowLeft":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowLeft" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/KeyboardArrowLeft\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/KeyboardArrowLeft%22?");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowRight":
/*!********************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRight" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/KeyboardArrowRight\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/KeyboardArrowRight%22?");

/***/ }),

/***/ "@material-ui/pickers":
/*!***************************************!*\
  !*** external "@material-ui/pickers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/pickers\");\n\n//# sourceURL=webpack:///external_%22@material-ui/pickers%22?");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/styles%22?");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");\n\n//# sourceURL=webpack:///external_%22apollo-cache-inmemory%22?");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");\n\n//# sourceURL=webpack:///external_%22apollo-client%22?");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");\n\n//# sourceURL=webpack:///external_%22apollo-link-http%22?");

/***/ }),

/***/ "apollo-link-schema":
/*!*************************************!*\
  !*** external "apollo-link-schema" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-schema\");\n\n//# sourceURL=webpack:///external_%22apollo-link-schema%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "cross-fetch/polyfill":
/*!***************************************!*\
  !*** external "cross-fetch/polyfill" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cross-fetch/polyfill\");\n\n//# sourceURL=webpack:///external_%22cross-fetch/polyfill%22?");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns\");\n\n//# sourceURL=webpack:///external_%22date-fns%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "graphql-iso-date":
/*!***********************************!*\
  !*** external "graphql-iso-date" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-iso-date\");\n\n//# sourceURL=webpack:///external_%22graphql-iso-date%22?");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");\n\n//# sourceURL=webpack:///external_%22graphql-tag%22?");

/***/ }),

/***/ "graphql-yoga":
/*!*******************************!*\
  !*** external "graphql-yoga" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-yoga\");\n\n//# sourceURL=webpack:///external_%22graphql-yoga%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");\n\n//# sourceURL=webpack:///external_%22react-apollo%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-swipeable-views\");\n\n//# sourceURL=webpack:///external_%22react-swipeable-views%22?");

/***/ }),

/***/ "react-swipeable-views-utils":
/*!**********************************************!*\
  !*** external "react-swipeable-views-utils" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-swipeable-views-utils\");\n\n//# sourceURL=webpack:///external_%22react-swipeable-views-utils%22?");

/***/ }),

/***/ "recompose/compose":
/*!************************************!*\
  !*** external "recompose/compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recompose/compose\");\n\n//# sourceURL=webpack:///external_%22recompose/compose%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });