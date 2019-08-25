import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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

const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    fetchUser(id: $id) {
      firstname
      password
      lastname
      points
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

class Profile_page extends React.Component {
  render() {
    return <div> Profile Page</div>;
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
