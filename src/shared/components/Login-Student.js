import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Error from "@material-ui/icons/Error";

const styles = theme => ({
  bg: {
    position: "absolute",
    float: "right",
    top: 0,
    height: "100%",
    right: 0,
    minHeight: 800
  },
  card: {
    minWidth: 205,
    width: 300,
    padding: 50
  },
  container: {
    position: "relative",
    top: 150,
    margin: -100,
    marginTop: -130
  },
  textField: {},
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  header: {
    fontFamily: "Pacifico",
    marginRight: 100
  },
  header2: {
    fontFamily: "Pacifico",
    marginRight: -25
  },

  tree: {
    width: 250,
    postion: "relative",
    height: 250,
    marginRight: 50
  }
});

class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {}

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <img src={"./images/ProfileBg.svg"} className={classes.bg} />
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-end"
          className={classes.container}
          spacing={5}
        >
          <Grid item>
            <Typography
              className={classes.header}
              color="secondary"
              variant="h2"
            >
              Impact
            </Typography>
          </Grid>
          <Grid item>
            <img src={"./images/Tree.svg"} className={classes.tree} />
          </Grid>
          <Grid item>
            <Typography
              className={classes.header2}
              variant="h3"
              color="secondary"
            >
              The Next Generation
            </Typography>
          </Grid>
          <form noValidate autoComplete="off" method="post" action="/login">
            <Grid container direction="column" justify="center">
              <Card className={classes.card}>
                <Grid item>
                  <TextField
                    id="standard-name"
                    label="Name"
                    name="username"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-name"
                    label="Password"
                    name="password"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Card>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="/signup"
            >
              Sign up
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
