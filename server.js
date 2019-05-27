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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mongodb_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mongodb/User */ \"./src/server/mongodb/User.js\");\n/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-yoga */ \"graphql-yoga\");\n/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_yoga__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cross-fetch/polyfill */ \"cross-fetch/polyfill\");\n/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(connect_flash__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! apollo-link-schema */ \"apollo-link-schema\");\n/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(apollo_link_schema__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jss */ \"jss\");\n/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/colors/blue */ \"@material-ui/core/colors/blue\");\n/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/colors/purple */ \"@material-ui/core/colors/purple\");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _shared_redux_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/redux/store */ \"./src/shared/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var _shared_redux_reducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/redux/reducer */ \"./src/shared/redux/reducer.js\");\n/* harmony import */ var _shared_redux_reducer__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_shared_redux_reducer__WEBPACK_IMPORTED_MODULE_30__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LocalStrategy = passport_local__WEBPACK_IMPORTED_MODULE_17___default.a.Strategy;\nmongoose__WEBPACK_IMPORTED_MODULE_6___default.a.connect(\"mongodb://Charles:ilovemychurch1@ds163822.mlab.com:63822/impact\");\nvar server = new graphql_yoga__WEBPACK_IMPORTED_MODULE_8__[\"GraphQLServer\"]({\n  typeDefs: _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"typeDefs\"],\n  resolvers: _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"resolvers\"]\n});\nserver.express.use(connect_flash__WEBPACK_IMPORTED_MODULE_19___default()());\nserver.express.use(body_parser__WEBPACK_IMPORTED_MODULE_18___default.a.urlencoded({\n  extended: false\n}));\nserver.express.use(express_session__WEBPACK_IMPORTED_MODULE_15___default()({\n  secret: 'Impact',\n  resave: true,\n  saveUninitialized: true,\n  cookie: {\n    maxAge: 60000\n  }\n}));\nserver.express.use(passport__WEBPACK_IMPORTED_MODULE_16___default.a.initialize());\nserver.express.use(passport__WEBPACK_IMPORTED_MODULE_16___default.a.session());\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.serializeUser(function (user, done) {\n  done(null, user.id);\n});\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.deserializeUser(function (id, done) {\n  _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"User\"].findById(id, function (err, user) {\n    done(err, user);\n  });\n});\npassport__WEBPACK_IMPORTED_MODULE_16___default.a.use(new LocalStrategy(function (firstname, password, done) {\n  _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"User\"].findOne({\n    firstname: firstname\n  }, function (err, user) {\n    if (err) {\n      return done(err);\n    }\n\n    if (!user) {\n      return done(null, false, {\n        message: 'Incorrect username.'\n      });\n    }\n\n    if (!user.validPassword(password)) {\n      return done(null, false, {\n        message: 'Incorrect password.'\n      });\n    }\n\n    return done(null, user);\n  });\n}));\nserver.express.use(cors__WEBPACK_IMPORTED_MODULE_9___default()());\nserver.express.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\nserver.express.post('/login', passport__WEBPACK_IMPORTED_MODULE_16___default.a.authenticate('local', {\n  successRedirect: '/profile',\n  failureRedirect: '/',\n  failureFlash: true\n}));\nserver.express.get('/home', function (req, res, next) {\n  res.send(\"<h1> Home </h1>\");\n});\nserver.express.get('*', function (req, res, next) {\n  var sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_22__[\"SheetsRegistry\"](); // Create a sheetsManager instance.\n\n  var sheetsManager = new Map(); // Create a theme instance.\n\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__[\"createMuiTheme\"])({\n    palette: {\n      primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_25___default.a,\n      secondary: {\n        main: '#FFFFFF'\n      },\n      accent: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_26___default.a,\n      type: 'light'\n    },\n    typography: {\n      useNextVariants: true,\n      fontFamily: ['Baloo Chettan', 'Raleway'].join(',')\n    }\n  });\n  var generateClassName = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__[\"createGenerateClassName\"])();\n  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"])(req.url, route);\n  }) || {};\n  var client = new apollo_client__WEBPACK_IMPORTED_MODULE_12___default.a({\n    ssrMode: true,\n    // Remember that this is the interface the SSR server will use to connect to the\n    // API server, so we need to ensure it isn't firewalled, etc\n    link: new apollo_link_schema__WEBPACK_IMPORTED_MODULE_21__[\"SchemaLink\"]({\n      UserSchema: _mongodb_User__WEBPACK_IMPORTED_MODULE_7__[\"UserSchema\"]\n    }),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_14__[\"InMemoryCache\"]()\n  });\n  var preloadedState = _shared_redux_store__WEBPACK_IMPORTED_MODULE_28__[\"store\"].getState();\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_29__[\"Provider\"], {\n    store: _shared_redux_store__WEBPACK_IMPORTED_MODULE_28__[\"store\"]\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_23___default.a, {\n    registry: sheetsRegistry,\n    generateClassName: generateClassName\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__[\"MuiThemeProvider\"], {\n    theme: theme,\n    sheetsManager: sheetsManager\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__[\"ApolloProvider\"], {\n    client: client\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: req.session\n  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))))));\n  var css = sheetsRegistry.toString();\n  res.send(\"\\n\\t\\t<!DOCTYPE html>\\n\\t\\t<html>\\n\\t\\t\\t<head>\\n\\t\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n      <style id=\\\"jss-server-side\\\">\".concat(css, \"</style>\\n\\t\\t\\t<title> I.M.P.A.C.T </title>\\n      <link href=\\\"https://fonts.googleapis.com/css?family=Baloo+Chettan\\\" rel=\\\"stylesheet\\\">\\n\\t\\t\\t<script src = '/bundle.js' defer> </script>\\n\\t\\t\\t<script>window.__INITIAL_DATA__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_20___default()(req.session), \"\\n      window.__PRELOADED_STATE__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_20___default()(preloadedState), \"</script>\\n\\t\\t\\t</head>\\n\\t\\t\\t<body>\\n\\t\\t\\t\\t<div id = 'app'>\").concat(markup, \"</div>\\n\\n\\t\\t\\t</body>\\n\\n\\t\\t</html>\"));\n});\nvar op = {\n  port: process.env.PORT || 3000,\n  endpoint: '/graphql'\n};\nserver.start(op, function () {\n  return console.log('Server running on port ' + op.port + ' running in ' + \"development\" + ' mode');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/mongodb/User.js":
/*!************************************!*\
  !*** ./src/server/mongodb/User.js ***!
  \************************************/
/*! exports provided: Dup, typeDefs, UserSchema, User, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dup\", function() { return Dup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserSchema\", function() { return UserSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar typeDefs = \"\\ntype Query\\n{\\n\\tusers: [User]\\n\\tfetchUser(id: ID!) : User\\n}\\ntype User\\n{\\n\\tid: ID!\\n  firstname : String!\\n  lastname : String!\\n\\temail : String!\\n\\tpassword : String!\\n\\tadmin : Boolean\\n\\tpoints : Int\\n}\\ntype Mutation{\\n\\tcreateUser(firstname: String!, lastname: String!, email : String!, password: String!, admin: Boolean ,  points: Int) : User\\n\\tupdateAccess (id: ID!, accessCode : String!) : User\\n\\tupdateAdmin(id: ID!, admin: Boolean!) : User\\n\\tdeleteUser(id:ID!) : User\\n\\tdeleteAllUser : User\\n\\n}\\n\\n\\n\";\nvar UserSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: String,\n  firstname: String,\n  lastname: String,\n  password: String,\n  admin: Boolean,\n  points: Number\n});\nvar Dup = false;\n\nUserSchema.methods.validPassword = function (pwd) {\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(pwd, this.password);\n};\n\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Users\", UserSchema);\nvar resolvers = {\n  Query: {\n    users: function users() {\n      return User.find();\n    },\n    fetchUser: function () {\n      var _fetchUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(_, _ref) {\n        var id, sessionUser;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                id = _ref.id;\n                sessionUser = {};\n                _context.next = 4;\n                return User.findById(id, function (err, user) {\n                  sessionUser = user;\n                });\n\n              case 4:\n                return _context.abrupt(\"return\", sessionUser);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function fetchUser(_x, _x2) {\n        return _fetchUser.apply(this, arguments);\n      }\n\n      return fetchUser;\n    }()\n  },\n  Mutation: {\n    createUser: function () {\n      var _createUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(_, _ref2) {\n        var firstname, lastname, email, password, salt, hash, dup, user;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                firstname = _ref2.firstname, lastname = _ref2.lastname, email = _ref2.email, password = _ref2.password;\n                salt = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSaltSync(10);\n                hash = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(password, salt);\n                dup = false;\n                _context2.next = 6;\n                return User.findOne({\n                  firstname: firstname,\n                  lastname: lastname\n                }, function (err, res) {\n                  if (err) {\n                    console.log(\"Error in connecting to MongoDB\");\n                  } else if (res) {\n                    dup = true;\n                  }\n\n                  ;\n                });\n\n              case 6:\n                if (!dup) {\n                  _context2.next = 11;\n                  break;\n                }\n\n                console.log(\"Duplicate found on Database found on the name: \" + firstname + \" \" + lastname);\n                return _context2.abrupt(\"return\", null);\n\n              case 11:\n                user = new User({\n                  firstname: firstname,\n                  lastname: lastname,\n                  email: email,\n                  password: hash,\n                  points: 0\n                });\n                _context2.next = 14;\n                return user.save();\n\n              case 14:\n                return _context2.abrupt(\"return\", user);\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function createUser(_x3, _x4) {\n        return _createUser.apply(this, arguments);\n      }\n\n      return createUser;\n    }(),\n    updateAccess: function () {\n      var _updateAccess = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(_, _ref3) {\n        var id, accessCode;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                id = _ref3.id, accessCode = _ref3.accessCode;\n                _context3.next = 3;\n                return User.findByIdAndUpdate(id, {\n                  accessCode: accessCode\n                });\n\n              case 3:\n                return _context3.abrupt(\"return\", true);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function updateAccess(_x5, _x6) {\n        return _updateAccess.apply(this, arguments);\n      }\n\n      return updateAccess;\n    }(),\n    updateAdmin: function () {\n      var _updateAdmin = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(_, _ref4) {\n        var id, admin;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                id = _ref4.id, admin = _ref4.admin;\n                _context4.next = 3;\n                return User.findByIdAndUpdate(id, {\n                  admin: admin\n                });\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function updateAdmin(_x7, _x8) {\n        return _updateAdmin.apply(this, arguments);\n      }\n\n      return updateAdmin;\n    }(),\n    deleteUser: function () {\n      var _deleteUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee5(_, _ref5) {\n        var id;\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                id = _ref5.id;\n                _context5.next = 3;\n                return User.findByIdAndRemove(id);\n\n              case 3:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      function deleteUser(_x9, _x10) {\n        return _deleteUser.apply(this, arguments);\n      }\n\n      return deleteUser;\n    }(),\n    deleteAllUser: function () {\n      var _deleteAllUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee6(_) {\n        return regeneratorRuntime.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return User.deleteMany();\n\n              case 2:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      function deleteAllUser(_x11) {\n        return _deleteAllUser.apply(this, arguments);\n      }\n\n      return deleteAllUser;\n    }()\n  }\n};\n\n\n//# sourceURL=webpack:///./src/server/mongodb/User.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            Component = _ref.component,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest));\n          }\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        render: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Route not Found \");\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/components/Login.js":
/*!****************************************!*\
  !*** ./src/shared/components/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Error */ \"@material-ui/icons/Error\");\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_9__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    button: {\n      margin: theme.spacing.unit\n    },\n    card: {\n      minWidth: 205,\n      width: 300,\n      padding: 50\n    },\n    container: {\n      position: 'relative',\n      top: 150\n    },\n    textField: {},\n    dense: {\n      marginTop: 19\n    },\n    menu: {\n      width: 200\n    },\n    header: {\n      fontSize: 30\n    },\n    tree: {\n      width: 250,\n      postion: 'relative',\n      height: 250\n    }\n  };\n};\n\nvar TextFields =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TextFields, _React$Component);\n\n  function TextFields(props) {\n    var _this;\n\n    _classCallCheck(this, TextFields);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextFields).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      var name = event.target.name;\n\n      _this.setState(_defineProperty({}, name, event.target.value));\n    });\n\n    _this.state = {\n      username: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(TextFields, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.body.style.backgroundColor = \"white\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        container: true,\n        direction: \"column\",\n        justify: \"space-evenly\",\n        alignItems: \"center\",\n        className: classes.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        className: classes.header\n      }, \" IMPACT the next Generation \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: './images/Tree.svg',\n        className: classes.tree\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        noValidate: true,\n        autoComplete: \"off\",\n        method: \"post\",\n        action: \"/login\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        container: true,\n        direction: \"column\",\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        className: classes.card\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        id: \"standard-name\",\n        label: \"Name\",\n        name: \"username\",\n        className: classes.textField,\n        value: this.state.name,\n        onChange: this.handleChange,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        id: \"standard-name\",\n        label: \"Password\",\n        name: \"password\",\n        className: classes.textField,\n        value: this.state.name,\n        onChange: this.handleChange\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        variant: \"contained\",\n        color: \"primary\",\n        className: classes.button,\n        type: \"submit\"\n      }, \"Log In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        variant: \"contained\",\n        color: \"primary\",\n        className: classes.button,\n        href: \"/signup\"\n      }, \"Sign up\")));\n    }\n  }]);\n\n  return TextFields;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nTextFields.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(TextFields));\n\n//# sourceURL=webpack:///./src/shared/components/Login.js?");

/***/ }),

/***/ "./src/shared/components/Profile.js":
/*!******************************************!*\
  !*** ./src/shared/components/Profile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose/compose */ \"recompose/compose\");\n/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/action */ \"./src/shared/redux/action.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"query FetchUser($id: ID!){\\n\\tfetchUser(id : $id )\\n  {\\n\\t\\tfirstname\\n    password\\n\\t\\tlastname\\n\\t\\tpoints\\n}\\n\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar FETCH_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());\n\nvar styles = function styles(theme) {\n  return {\n    container: {},\n    card: {\n      postion: 'relative',\n      margin: 50,\n      height: 200\n    }\n  };\n};\n\nvar Profile_page =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Profile_page, _React$Component);\n\n  function Profile_page(props) {\n    var _this;\n\n    _classCallCheck(this, Profile_page);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile_page).call(this, props));\n    var data;\n\n    if (false) {} else {\n      data = props.staticContext;\n    }\n\n    _this.state = {\n      data: data\n    };\n    return _this;\n  }\n\n  _createClass(Profile_page, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n      var data = this.state.data;\n\n      if (data.passport) {\n        console.log(data.passport);\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          container: true,\n          direction: \"column\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          item: true\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          className: classes.card\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          container: true,\n          justify: \"center\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          item: true\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__[\"Query\"], {\n          query: FETCH_USER,\n          variables: {\n            id: data.passport.user\n          }\n        }, function (_ref) {\n          var loading = _ref.loading,\n              error = _ref.error,\n              data = _ref.data;\n          if (loading) return null;\n          if (error) return \"Error \".concat(error);\n\n          _this2.props.addUser(data.fetchUser);\n\n          return \"Hello \".concat(data.fetchUser.firstname, \", you have \").concat(data.fetchUser.points, \" points accumulated!\");\n        }))))))));\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"  You need to \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"/\"\n        }, \"log in\"), \" first! \");\n      }\n    }\n  }]);\n\n  return Profile_page;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nProfile_page.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n}; //REDUX MAP CONNECTION\n\nvar mapStatetoProps = function mapStatetoProps(state) {\n  return {\n    firstname: state.fname,\n    user: state.user\n  };\n};\n\nvar mapDispatchtoProps = function mapDispatchtoProps(dispatch) {\n  return {\n    addFirst: function addFirst(name) {\n      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_7__[\"addFirstname\"])(name));\n    },\n    addUser: function addUser(user) {\n      return dispatch(Object(_redux_action__WEBPACK_IMPORTED_MODULE_7__[\"addUser\"])(user));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_6___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles, {\n  name: 'Profile_page'\n}), Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(mapStatetoProps, mapDispatchtoProps))(Profile_page));\n\n//# sourceURL=webpack:///./src/shared/components/Profile.js?");

/***/ }),

/***/ "./src/shared/components/SignUp.js":
/*!*****************************************!*\
  !*** ./src/shared/components/SignUp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Input */ \"@material-ui/core/Input\");\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Error */ \"@material-ui/icons/Error\");\n/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\nmutation(  $firstname: String!, $lastname: String!, $email: String!, $password: String!)\\n{\\n  createUser( firstname : $firstname, lastname : $lastname, email: $email, password : $password )\\n  {\\n    firstname\\n  }\\n\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      minWidth: 275,\n      padding: 50,\n      width: 300\n    },\n    button: {\n      margin: theme.spacing.unit\n    },\n    container: {\n      top: 250,\n      position: 'relative'\n    }\n  };\n};\n\nvar ADD_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());\n\nfunction Compare(field1, field2) {\n  var length = field1.length;\n  var buffer = field2.substring(0, length);\n\n  if (field1 === buffer) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nvar SignUp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SignUp, _React$Component);\n\n  function SignUp(props) {\n    var _this;\n\n    _classCallCheck(this, SignUp);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignUp).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"register\", function () {\n      _this.props.createUser({\n        variables: {\n          firstname: _this.state.firstname,\n          lastname: _this.state.lastname,\n          email: _this.state.email,\n          password: _this.state.password\n        }\n      });\n    });\n\n    _this.state = {\n      firstname: null,\n      lastname: null,\n      email: '',\n      password: '',\n      emailC: '',\n      passwordC: '',\n      errorE: false,\n      errorP: false\n    };\n    return _this;\n  }\n\n  _createClass(SignUp, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      var name = event.target.name;\n      this.setState(_defineProperty({}, name, event.target.value));\n\n      if (name == 'emailC' || name == 'email') {\n        if (!Compare(event.target.value, this.state.email)) {\n          this.setState({\n            errorE: true\n          });\n        } else {\n          this.setState({\n            errorE: false\n          });\n        }\n      }\n\n      if (name == 'passwordC' || name == 'password') {\n        if (!Compare(event.target.value, this.state.password)) {\n          this.setState({\n            errorP: true\n          });\n        } else {\n          this.setState({\n            errorP: false\n          });\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        container: true,\n        justify: \"center\",\n        className: classes.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        method: \"post\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        className: classes.card\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        container: true,\n        direction: \"column\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        name: \"firstname\",\n        placeholder: \"First Name\",\n        onChange: this.handleChange.bind(this),\n        value: this.state.name,\n        autoFocus: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        name: \"lastname\",\n        placeholder: \"Last Name\",\n        onChange: this.handleChange.bind(this),\n        value: this.state.name\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        name: \"email\",\n        placeholder: \"Email\",\n        onChange: this.handleChange.bind(this),\n        value: this.state.name\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        name: \"emailC\",\n        placeholder: \"Confirm Email\",\n        onChange: this.handleChange.bind(this),\n        error: this.state.errorE,\n        value: this.state.name\n      }), this.state.errorE && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        name: \"password\",\n        placeholder: \"Pin\",\n        onChange: this.handleChange.bind(this),\n        value: this.state.name,\n        inputProps: {\n          maxLength: \"4\"\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        item: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        name: \"passwordC\",\n        placeholder: \"Confirm Pin\",\n        onChange: this.handleChange.bind(this),\n        error: this.state.errorP,\n        value: this.state.name,\n        inputProps: {\n          maxLength: \"4\"\n        }\n      }), this.state.errorP && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_11___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        variant: \"contained\",\n        onClick: function onClick() {\n          return _this2.register();\n        },\n        className: classes.button,\n        color: \"primary\"\n      }, \"Submit\")));\n    }\n  }]);\n\n  return SignUp;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nSignUp.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__[\"graphql\"])(ADD_USER, {\n  name: 'createUser'\n})(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(SignUp)));\n\n//# sourceURL=webpack:///./src/shared/components/SignUp.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Login */ \"./src/shared/components/Login.js\");\n/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SignUp */ \"./src/shared/components/SignUp.js\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Profile */ \"./src/shared/components/Profile.js\");\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _components_Login__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/profile',\n  exact: true,\n  component: _components_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/signup',\n  exact: true,\n  component: _components_SignUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

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

/***/ "@material-ui/core/colors/purple":
/*!**************************************************!*\
  !*** external "@material-ui/core/colors/purple" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/purple\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/purple%22?");

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

/***/ "@material-ui/icons/Error":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Error" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Error\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Error%22?");

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

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jss\");\n\n//# sourceURL=webpack:///external_%22jss%22?");

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

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

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