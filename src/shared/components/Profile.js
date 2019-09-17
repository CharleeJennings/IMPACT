import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { addFirstname, addUser } from "../redux/action";
import Typography from "@material-ui/core/Typography";
import { graphql, Query } from "react-apollo";
import gql from "graphql-tag";
import Paper from "@material-ui/core/Paper";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import StudentDash from './StudentDash'

const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    fetchUser(id: $id) {
      firstname
      password
      lastname
      points
      birthday
    }
  }
`;

const styles = theme => ({
  container: {
    height: "100vh"
  },

  card: {},

  profile: {
    height: 200
  },

  root: {
    flexGrow: 1
  }
});



class Profile_page extends React.Component{
 constructor(props)
 {
  super(props);
	let data;
	if (__isBrowser__)
	{
		data = window.__INITIAL_DATA__;
		delete window.__INITIAL_DATA__;
	}
	else {
		data = props.staticContext
	}
	this.state = {data}

 }
 
 
render()
{
  const {data} = this.state 
  if (data.passport || process.env.NODE_ENV == 'development')
  {
 return( <StudentDash passport = {data}/>)
  }
 else
 {
 return (
  <Grid container direction="column" alignContent='center' style ={{marginTop: '400px'}}>
    <Grid item xs={12}>
  <Typography> Please login at the <a href="/">Home</a> page </Typography>
  </Grid>
 </Grid>
  
 )
 }
}
}

Profile_page.propTypes = {
  classes: PropTypes.object.isRequired
};

//REDUX MAP CONNECTION
const mapStatetoProps = state => {
  return { firstname: state.fname, user: state.user };
};
const mapDispatchtoProps = dispatch => {
  return {
    addFirst: name => dispatch(addFirstname(name)),
    addUser: user => dispatch(addUser(user))
  };
};

export default compose(
  withStyles(styles, { name: "Profile_page" }),
  connect(
    mapStatetoProps,
    mapDispatchtoProps
  )
)(Profile_page);
