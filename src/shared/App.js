import React, {useContext} from "react";
import routes from "./routes";
import {Route, Switch, Redirect} from "react-router-dom";
import {FirebaseContext} from "../server/firebase/context.js";
import Firebase from "../server/firebase/index.js";
import withAuthentication from "../server/firebase/Authenication/Authen";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName();
const App = (props) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<FirebaseContext.Provider value={new Firebase()}>
				<Switch>
					{routes.map(({path, exact, component: Component, ...rest}) => (
						<Route key={path} path={path} exact={exact} render={(props) => <Component {...props} {...rest} />} />
					))}
					<Route render={() => <h1> Route not Found </h1>} />
				</Switch>
			</FirebaseContext.Provider>
		</StylesProvider>
	);
};

export default App;
