import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hydrate } from 'react-dom';
import ApolloClient from "apollo-boost";
import App from '../shared/App.js';
import {BrowserRouter} from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const client = new ApolloClient({});


class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
     const jssStyles = document.getElementById('jss-server-side');
     if (jssStyles && jssStyles.parentNode) {
       jssStyles.parentNode.removeChild(jssStyles);
     }
   }
  render() {
    return <App />
  }
}

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

hydrate(
	 <JssProvider generateClassName={generateClassName}>
   <MuiThemeProvider theme={theme}>
	<ApolloProvider client = {client}>
	<BrowserRouter>
			<Main />
	</BrowserRouter>
	</ApolloProvider>
    </MuiThemeProvider>
	 </JssProvider>,
	 document.getElementById('app')
)
