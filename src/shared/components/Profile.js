import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import compose from 'recompose/compose'
import {addFirstname, addUser} from '../redux/action'
import Typography from '@material-ui/core/Typography';
import {graphql, Query} from 'react-apollo'
import gql from 'graphql-tag'



const FETCH_USER = gql`query FetchUser($id: ID!){
	fetchUser(id : $id )
  {
		firstname
    password
		lastname
		points
}

}`


const styles = theme => ({

container:
{
	position:'relative',
	top: 50,
	margin: 20,
},

card:
{
	position: 'relative',
	margin: 50,
	height: 600,
	width: '50%'
}


})






class Profile_page extends React.Component {

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

		 const { classes } = this.props;
		 const {data} = this.state
		 	if (data.passport)
      {
      console.log(data.passport);
		  return(
										<Query query={FETCH_USER} variables={{id: data.passport.user}}>
									{
									  ( {loading, error, data}) =>
									  {
									    if (loading) return 'Loading';
									    if (error) return `Error ${error}`
											this.props.addUser(data.fetchUser)
									    return (<Grid container direction='row'>
													<Grid item>
													<Card className={classes.card} >
												    <Typography className = {classes.container}>
															Hello {data.fetchUser.firstname}, you have {data.fetchUser.points} points accumulated!
											       </Typography>
														 </Card>
														 </Grid>
														 <Grid item>
														 <Card className={classes.card}>
														 	Hello
														 </Card>
														 </Grid>

													 </Grid>)
									  }
									}
									</Query>
			         );
      }
			else
      {
				return (<h5>  You need to <a href='/'>log in</a> first! </h5>)
			}
  }
}


Profile_page.propTypes = {
  classes: PropTypes.object.isRequired,
};


//REDUX MAP CONNECTION
const mapStatetoProps = state =>
{
	return {firstname: state.fname,
					user: state.user
	}
}
const mapDispatchtoProps = dispatch => {

  return {
    addFirst: (name) => dispatch(addFirstname(name)),
		addUser: (user)=> dispatch(addUser(user))
  }
}



export default compose(withStyles(styles,{name: 'Profile_page'}),connect(mapStatetoProps,mapDispatchtoProps))(Profile_page);
