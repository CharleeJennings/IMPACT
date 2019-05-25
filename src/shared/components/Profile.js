import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
 import compose from 'recompose/compose'
 import {addFirstname} from '../redux/action'



const styles = theme => ({

container:
{

},

card:
{
	postion: 'relative',
	margin: 50,
	height: 200,


}




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
     console.log(this.props.firstname);
     this.props.addFirst("CHARLEES")
     console.log(this.props.firstname);
		 const { classes } = this.props;
		 const {data} = this.state
		 	if (data.passport)
		return(
			<Grid container direction= 'column'>
			<Grid item>
			<Card className= {classes.card}>

			<Grid container justify = 'center'>
			<Grid item>

			You currently have points

			</Grid>
			</Grid>

			</Card>
			</Grid>



		  </Grid>);
			else {
				return (<h5>  You need to <a href='/'>log in</a> first! </h5>)
			}
  }
}


Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStatetoProps = state => {

	return {firstname: state.fname}
}

const mapDispatchtoProps = dispatch => {

  return {
    addFirst: (name) => dispatch(addFirstname(name))

  }
}



export default compose(withStyles(styles,{name: 'Profile'}),connect(mapStatetoProps,mapDispatchtoProps))(Profile);
