import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import gql from "graphql-tag";
import { graphql, Mutation } from "react-apollo";
import red from "@material-ui/core/colors/red";
import Input from "@material-ui/core/Input";
import Error from "@material-ui/icons/Error";
import { Redirect, Route } from "react-router";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import SwipeableViews from "react-swipeable-views";
import DatePickers from "./DateField";
import { useMutation } from "@apollo/react-hooks";

////////////
//Style
////////////

const styles = theme => ({
  fields: {
    padding: 15
  },
  root: {
    width: "90%"
  },

  back: {
    position: "relative",
    left: -70,
    top: 50
  },

  paper: {
    minWidth: 400,
    maxWidth: 400,
    height: 200,
    padding: 20
  },

  button: {
    margin: theme.spacing.unit
  },

  container: {
    marginTop: 100
  },

  container2: {
    position: "relative"
  },

  step: {
    minWidth: 350,
    width: "90%",
    maxWidth: 800,
    backgroundColor: "transparent"
  }
});
/////////////////////////////
// GraphQL Add User Mutation
////////////////////////////
const ADD_USER = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $birthday: Date!
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      birthday: $birthday
    ) {
      firstname
      lastname
    }
  }
`;

///////////////////////
//Stepper Functions
///////////////////////

function getSteps() {
  return ["Name", "Email", "Pin", "Birthday", "Review"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Please enter your full name";
    case 1:
      return "Confirm a email";
    case 2:
      return "Confirm a pin.";
    case 3:
      return "We would like to know your birthday!";
    default:
      return "Please review your information";
  }
}

//////////////////
//Custom Code
/////////////////

function compare(field1, field2) {
  var length = field1.length;

  var buffer = field2.substring(0, length);

  if (field1 === buffer) {
    return true;
  } else {
    return false;
  }
}

function Review(props) {
  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography>
          Name: {props.firstname} {props.lastname}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>Email: {props.email}</Typography>
      </Grid>
      <Grid item>
        <Typography>Birthday: {props.birthday}</Typography>
      </Grid>
    </Grid>
  );
}

//////////////////////
//Rendered Componenet
//////////////////////

function SignUp(props) {
  const [form, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const maxSteps = 4;

  function handleStepChange(step) {
    setActiveStep(step);
  }

  function handleNext() {
    let newSkipped = skipped;

    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const [addStudent, { data }] = useMutation(ADD_USER);

  const theme = useTheme();

  const [date, setDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const { classes } = props;

  function handleSubmit() {
    setTimeout(() => {
      addStudent({
        variables: {
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          password: form.password,
          birthday: date
        }
      });
      location.href = "/";
    }, 3000);
  }

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      direction="column"
      className={classes.container}
    >
      <Stepper activeStep={activeStep} className={classes.step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid item xs={12}>
        <Typography>{getStepContent(activeStep)}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Fab className={classes.back} size="small" color="primary" href="/">
          <ArrowBack />
        </Fab>
        <Paper className={classes.paper}>
          <form
            onSubmit={e => {
              e.preventDefault();

              console.log(data);
            }}
          >
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              <Grid container direction="column">
                <Grid item xs={12}>
                  <TextField
                    label="Firstname"
                    onChange={updateField}
                    name="firstname"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Lastname"
                    onChange={updateField}
                    name="lastname"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                alignContent="center"
              >
                <Grid item xs={6}>
                  <TextField label="Email" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Confirm Email"
                    onChange={updateField}
                    name="email"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                alignContent="center"
              >
                <Grid item xs={3}>
                  <TextField label="Pin" />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Confirm Pin"
                    name="password"
                    onChange={updateField}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                alignContent="center"
              >
                <Grid item xs={12}>
                  <DatePickers setDate={setDate} />
                </Grid>
              </Grid>
              <Review
                firstname={form.firstname}
                lastname={form.lastname}
                email={form.email}
                birthday={date.toString()}
              />
            </SwipeableViews>
          </form>
        </Paper>
      </Grid>
      <div style={{ margin: 30 }}>
        {activeStep !== steps.length - 1 ? (
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
