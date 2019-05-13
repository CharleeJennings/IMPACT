import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const style = theme => ({

container:
{

},




})


class Profile extends React.Component {

constructor(props)
{
	super(props)
	let data
	if (__isBrowser__)
	{
		data = window.__INITIAL_DATA__
		delete window.__INITIAL_DATA__
	}
	else {
		data = props.staticContext
	}

	this.state = {data}
}

  render()

	 {
		return(<h1> This is the end of the demo</h1>);
  }
}

export default Profile;
