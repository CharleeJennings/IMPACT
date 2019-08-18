import React, { useContext } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { hydrate } from "react-dom";
import ApolloClient from "apollo-boost";
import App from "../shared/App.js";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { store } from "../shared/redux/store";
import { Provider } from "react-redux";
import { useTransition, animated } from "react-spring";
import { __RouterContext } from "react-router";
import theme from "../shared/components/Theme";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}

hydrate(<Main />, document.getElementById("app"));
