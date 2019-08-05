import React from "react";
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
  constructor(props) {
    super(props);
    let data;
    if (__isBrowser__) {
      data = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      data = props.staticContext;
    }

    this.state = { data };
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    if (data.passport) {
      return (
        <Query query={FETCH_USER} variables={{ id: data.passport.user }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading";
            if (error) return `Error ${error}`;
            this.props.addUser(data.fetchUser);
            return (
              <Grid container fluid direction="row">
                <Grid item>
                  <Paper xs={12}>
                    <Typography className={classes.container}>
                      Hello {data.fetchUser.firstname}, you have{" "}
                      {data.fetchUser.points} points accumulated!
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Card className={classes.card} xs={12}>
                    Hello
                  </Card>
                </Grid>
              </Grid>
            );
          }}
        </Query>
      );
    } else if (process.env.NODE_ENV == "development") {
      return (
        <div className={classes.root}>
          <Grid
            container
            spacing={16}
            alignItems="center"
            className={classes.container}
          >
            <Grid item xs={6}>
              <Paper>Competion</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.profile}>Profile For Student</Paper>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <h5>
          {" "}
          You need to <a href="/">log in</a> first!{" "}
        </h5>
      );
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
