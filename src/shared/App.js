import React from 'react';
import routes from './routes'
import {Route, Switch, Redirect} from 'react-router-dom'






export default class App extends React.Component
{



	render()
	{
		return(
		<div>
		<Switch>
		          {routes.map(({ path, exact, component: Component, ...rest }) => (
            		<Route key={path} path={path} exact={exact} render={(props) => (
              		<Component {...props} {...rest} />
            			)} />
          ))}
					 					<Route render = {() => <h1> Route not Found </h1>}/>

		</Switch>
		 </div> );
	}
}
