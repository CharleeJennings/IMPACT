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
import {store} from '../shared/redux/store'
import {Provider} from 'react-redux'



const client = new ApolloClient({});


class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
     const jssStyles = document.getElementById('jss-server-side');
     console.log(jssStyles);
     if (jssStyles && jssStyles.parentNode) {
       jssStyles.parentNode.removeChild(jssStyles);
     }
     const preloadedState = window.__PRELOADED_STATE__

     // Allow the passed state to be garbage-collected
     delete window.__PRELOADED_STATE__

   }
  render() {
    return <App/>
  }
}



const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {main: '#FFFFFF'},
    accent: red,
    type: 'light',
  },
  typography:
  {
    useNextVariants: true,
    fontFamily: ['Baloo Chettan','Raleway'].join(','),
  }
});




const generateClassName = createGenerateClassName();

hydrate(
  <Provider store = {store}>
	 <JssProvider generateClassName={generateClassName}>
   <MuiThemeProvider theme={theme}>
	<ApolloProvider client = {client}>

	<BrowserRouter>

			<Main />

	</BrowserRouter>

	</ApolloProvider>
    </MuiThemeProvider>
	 </JssProvider>
    </Provider>,
	 document.getElementById('app')
)
