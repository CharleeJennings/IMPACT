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
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import DatePickers from "./DateField";

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
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
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
  return ["Name", "Email", "Pin", "Birthday", "Done"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Please enter your full name";
    case 1:
      return "Please fill out your email";
    case 2:
      return "Confirm a pin.";
    case 3:
      return "We would like to know your birthday!";
    default:
      return "Review";
  }
}

//////////////////
//Custom Code
/////////////////

const tutorialSteps = [
  {
    label: "Name",
    fields: [{ field: "Firstname" }, { field: "Lastname" }]
  },
  {
    label: "Email",
    validation: true,
    fields: [{ field: "Email" }, { field: "Confirm Email" }]
  },
  {
    label: "Password",
    validation: true,
    fields: [{ field: "Password" }, { field: "Confirm Password" }]
  }
];

function compare(field1, field2) {
  var length = field1.length;

  var buffer = field2.substring(0, length);

  if (field1 === buffer) {
    return true;
  } else {
    return false;
  }
}

//////////////////////
//Rendered Componenet
//////////////////////

function SignUp(props) {
  const [student, setStudent] = React.useState();
  const [animating, setAnimating] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const maxSteps = tutorialSteps.length;

  function handleStepChange(step) {
    setActiveStep(step);
  }
  function isStepOptional(step) {
    return step === 9;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  const theme = useTheme();

  const [firstname, setFirstname] = useState();

  const { classes } = props;

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
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
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
          <Mutation mutation={ADD_USER}>
            {(createUser, { data, loading, error }) => {
              return (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    createUser({
                      variables: {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        email: this.state.email,
                        password: this.state.password
                      }
                    });
                    console.log(data);
                  }}
                >
                  <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {tutorialSteps.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            direction="column"
                          >
                            {step.fields.map((field, index) => (
                              <Grid item xs={6} className={classes.fields}>
                                <TextField label={field.field} />
                              </Grid>
                            ))}
                          </Grid>
                        ) : null}
                      </div>
                    ))}
                    <DatePickers />
                  </SwipeableViews>
                </form>
              );
            }}
          </Mutation>
        </Paper>
      </Grid>
      <div style={{ margin: 30 }}>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset}>Submit</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}

              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  endpoint: "/"
};

export default graphql(ADD_USER, { name: "createUser" })(
  withStyles(styles)(SignUp)
);
