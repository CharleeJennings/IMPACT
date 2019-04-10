import React from 'react'



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
		return(<h1> Hello worl.d </h1>);
  }
}

export default Profile;
