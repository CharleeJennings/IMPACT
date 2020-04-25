import React, {useContext} from "react";
import {hydrate} from "react-dom";
import App from "../shared/App.js";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {__RouterContext} from "react-router";
import theme from "../shared/components/Theme";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";

const generateClassName = createGenerateClassName();

function Main() {
	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);
	return (
		<StylesProvider generateClassName={generateClassName}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</StylesProvider>
	);
}

hydrate(<Main />, document.getElementById("app"));
