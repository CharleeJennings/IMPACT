import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import gql from "graphql-tag";
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

import SwipeableViews from "react-swipeable-views";
import DatePickers from "./DateField";
import { useMutation } from "@apollo/react-hooks";
import CircularProgress from "@material-ui/core/CircularProgress";


////////////
//Style
////////////

const styles = theme => ({
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1
  },
  fields: {
    padding: 15
  },
  root: {
    width: "90%"
  },

  back: {
    position: "relative",
    left: 12,
    top: 50
  },
  card: {
    marginLeft: 30,
    width: 400
  },

  paper1: {
    maxWidth: 540,
    width: "100%",
    minWidth: 450,
    height: "100%"
  },
  innerGrid: {
    marginTop: 50
  },
  paper: {
    height: 250,
    marginLeft: 100,
    minWidth: 200,
    width: "65%"
  },
  swipe: {
    marginTop: 50
  },

  button: {
    margin: 10
  },
  content: {
    height: "100%"
  },
  container: {
    padding: 40,
    height: "100vh"
  },

  container2: {
    position: "relative"
  },

  step: {
    minWidth: 350,

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
  if (props.loading)
    return (
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
        justify="center"
        style={{ marginTop: "50px" }}
      >
        <Grid item xs={12}>
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    );
  else
    return (
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="flex-startr"
        justify="flex-start"
        spacing={1}
        style ={{padding: '20px'}}
      >
        <Grid item>
          <Typography >Name:</Typography>
          <Typography variant="h6" color="primary">
            {props.firstname} {props.lastname}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Email:
          </Typography>
          <Typography variant="h6" color="primary">
          {props.email}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Birthday:
          </Typography>
          <Typography variant="h6" color="primary">
          {props.birthday}
          </Typography>
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
    email: "" ,
    emailC: "",
    pin: "",
    pinC:"",
  });

  useEffect( () => {

    console.log(form + date)
    checkForm()

  }) 
  const [authen, setAuth] = useState(true);
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
    setAuth(true)
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

  function checkForm()
  {

    switch (activeStep)
{
    case 0: 
    {
      if ((form.firstname != "" ) && (form.lastname != ""))
      {
        setAuth(false)
      }
      else
      {
        setAuth(true)
      }
     
    }
    case 1:
      {
        if((form.email === form.emailC) && form.emailC != "")
        {
          setAuth(false)
        }
   
      
      }
    case 2:
      {
        if ((form.pin === form.pinC) && form.pinC !="")
        {
          setAuth(false)
        }
       
      }
      default:
        {
    
        }
  }
  }
  const [createUser, { called, loading, data }] = useMutation(ADD_USER, {
    onCompleted: () => {
      console.log(data);
      if (called) {
        setTimeout(() => {
          location.href = "/";
        }, 3000);
      }
    }
  });

  const theme = useTheme();

  const [date, setDate] = React.useState(new Date());

  const { classes } = props;

  function handleSubmit() {
    createUser({
      variables: {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        password: form.pinC,
        birthday: date
      }
    });
  }

  return (
    <div>
      <img src={"./images/SignUpBg.svg"} className={classes.bg} />
      <Grid container className={classes.container}>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            className={classes.content}
          >
            <Paper className={classes.paper1}>
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
                <Typography align="center">
                  {getStepContent(activeStep)}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Fab
                  className={classes.back}
                  size="small"
                  color="primary"
                  href="/"
                >
                  <ArrowBack />
                </Fab>
                <Paper className={classes.paper}>
                  <form
                    onSubmit={e => {
                      e.preventDefault();

                      console.log(data);
                    }}
                    style={{ height: "100%" }}
                  >
                    <SwipeableViews
                      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      style={{ height: "100%" }}
                      disabled
                      containerStyle={{ height: "100%" }}
                    >
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        alignContent="center"
                        className={classes.innerGrid}
                      >
                        <Grid item xs={12}>
                          <TextField
                            label="Firstname"
                            onChange={updateField}
                            name="firstname"
                          />
                        </Grid>
                        <Grid item xs={12}>
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
                        className={classes.innerGrid}
                      >
                        <Grid item xs={6}>
                          <TextField label="Email"
                          onChange={updateField}
                          name="email" />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Confirm Email"
                            onChange={updateField}
                            name="emailC"
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        alignContent="center"
                        className={classes.innerGrid}
                      >
                        <Grid item xs={3}>
                          <TextField label="Pin" onChange={updateField} name="pinC" />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            label="Confirm Pin"
                            name="pin"
                            onChange={updateField}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        alignContent="center"
                        className={classes.innerGrid}
                      >
                        <Grid item xs={12}>
                          <DatePickers setDate={setDate} setAuthen = {setAuth}/>
                        </Grid>
                      </Grid>
                      <Review
                        firstname={form.firstname}
                        lastname={form.lastname}
                        email={form.email}
                        birthday={date.toDateString()}
                        loading={loading}
                      />
                    </SwipeableViews>
                  </form>
                </Paper>
              </Grid>
              <Grid item>
                <div style={{ margin: "30px", marginLeft: "36%" }}>
                  {activeStep !== steps.length - 1 ? (
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        disabled={authen}
                      >
                        Next
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          Back
                        </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit}
                          disabled={loading}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
