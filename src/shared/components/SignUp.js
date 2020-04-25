import React, {useState, useEffect} from "react";
import {withStyles} from "@material-ui/core/styles";
import {useTheme} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {withFirebase} from "../../server/firebase/context.js";
import SwipeableViews from "react-swipeable-views";
import DatePickers from "./DateField";
import CircularProgress from "@material-ui/core/CircularProgress";
import compose from "recompose/compose";
import Hidden from "@material-ui/core/Hidden";
import MenuAppBar from "./NavigationBar";
import Confetti from "react-confetti";
import Tree from "./utilities/tree";
////////////
//Style
////////////

const styles = () => ({
	stepper: {},
	paper: {
		paddingTop: 100,
		paddingBottom: 100,
		paddingLeft: 50,
		paddingRight: 50,
	},
	bg: {
		position: "absolute",
		width: "100%",
		height: "100vh",

		backgroundImage: "linear-gradient(-45deg, #5372D3 0%, #FEFF56 100%)",
		opacity: 0.7,
		zIndex: -1,
	},
	content: {
		height: "100%",
	},
	step: {
		width: "100%",
		backgroundColor: "transparent",
	},
	email: {
		width: "100%",
		maxWidth: 300,
	},
	innerGrid: {},
	tree: {
		position: "absolute",
		zIndex: 0,
		height: 65,
		width: 65,
		top: 30,
	},
});

/////////////////////////////
// GraphQL Add User Mutation
////////////////////////////

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
			return "Confirm a 6-digit pin.";
		case 3:
			return "We would like to know your birthday!";
		default:
			return "Please review your information";
	}
}

function Review(props) {
	return !props.submit ? (
		<Grid container direction="column" alignItems="center" justify="flex-start">
			<Grid item>
				<Typography>Name:</Typography>
				<Typography variant="h6" color="primary">
					{props.firstname} {props.lastname}
				</Typography>
			</Grid>
			<Grid item>
				<Typography>Email:</Typography>
				<Typography variant="h6" color="primary">
					{props.email}
				</Typography>
			</Grid>
			<Typography>
				<Typography>Birthday:</Typography>
				<Typography variant="h6" color="primary">
					{props.birthday}
				</Typography>
			</Typography>
		</Grid>
	) : !props.registered ? (
		<Grid container direction="column" alignItems="center">
			<Grid item xs={12}>
				<CircularProgress />
			</Grid>
		</Grid>
	) : (
		<Grid container direction="column" alignItems="center">
			<Grid item>
				<Typography> Congratulations! You completed the registration processs </Typography>
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
		emailC: "",
		pin: "",
		pinC: "",
	});

	useEffect(() => {
		checkForm();
	});
	const [registered, setReg] = useState(false);
	const [submitted, setSub] = useState(false);
	const [authen, setAuth] = useState(true);
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped] = React.useState(new Set());
	const [formErr, setErr] = React.useState(false);
	const steps = getSteps();

	function handleStepChange(step) {
		setActiveStep(step);
	}

	function handleNext() {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setAuth(true);
	}

	function handleBack() {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	}

	const updateField = (e) => {
		setValues({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	function checkForm() {
		switch (activeStep) {
			case 0: {
				if (form.firstname != "" && form.lastname != "") {
					setAuth(false);
				} else {
					setAuth(true);
				}
			}
			case 1: {
				if (form.email === form.emailC && form.emailC != "") {
					setAuth(false);
				}
			}
			case 2: {
				if (form.pin === form.pinC && form.pinC != "" && form.pinC.length >= 6) {
					setAuth(false);
				} else {
					if (form.pin.length < 6) {
						setErr(true);
					}
				}
			}
			default: {
			}
		}
	}

	const theme = useTheme();

	const [date, setDate] = React.useState(new Date());

	const {classes} = props;

	function handleSubmit() {
		var fullName = `${form.firstname} ${form.lastname}`;
		setSub(true);
		console.log("submitted");

		props.firebase
			.doCreateUserWithEmailAndPassword(form.email, form.pin)
			.then((authUser) => {
				props.firebase.user(authUser.user.uid, date, form.firstname, form.lastname);
				authUser.user.updateProfile({
					displayName: `${fullName}`,
				});
				console.log("submitted");
				setReg(true);
				setTimeout(() => props.history.push("/profile"), 3000);
				return;
			})
			.catch(() => {});
		event.preventDefault();
	}

	return (
		<div style={{height: "100vh"}}>
			<div className={classes.tree}>
				<Tree />
			</div>
			<Hidden smDown>
				<Typography variant="h3" color="secondary" style={{opacity: "10%", fontSize: "3500%", position: "absolute", zIndex: -1, left: 0}}>
					Faith
				</Typography>
				<Typography variant="h3" noWrap={true} color="primary" style={{opacity: "10%", fontSize: "3500%", position: "absolute", zIndex: -1, right: 0, top: 400, width: 1100, textOverflow: "clip"}}>
					Love
				</Typography>
			</Hidden>
			<Grid container style={{padding: "25px", height: "100vh"}} direction="column" align="center" justify="center" spacing={0}>
				<Grid item>
					<Grid container justify="center" alignItems="center" direction="column" style={{margin: "0px"}}>
						<Hidden smDown>
							<Grid item xs={12} style={{minWidth: 500, maxWidth: 700, width: "100%"}}>
								<Stepper activeStep={activeStep} className={classes.step}>
									{steps.map((label) => {
										const stepProps = {};
										const labelProps = {};

										return (
											<Step key={label} {...stepProps}>
												<StepLabel {...labelProps}>{label}</StepLabel>
											</Step>
										);
									})}
								</Stepper>
							</Grid>
						</Hidden>

						<Grid item xs={12} style={{marginBottom: "20px"}}>
							<Typography variant="h4">{getStepContent(activeStep)}</Typography>
						</Grid>
						<Grid item xs={12} style={{width: "100%", maxWidth: "700px"}}>
							<Paper className={classes.paper}>
								<Grid container direction="column" justify="center" alignItems="center" style={{height: "100%"}}>
									<Grid item xs={12}>
										<form>
											<SwipeableViews
												axis={theme.direction === "rtl" ? "x-reverse" : "x"}
												index={activeStep}
												onChangeIndex={handleStepChange}
												enableMouseEvents
												style={{height: "100%", width: "100%"}}
												disabled
												containerStyle={{height: "100%", width: "100%"}}>
												<Grid container direction="column" alignItems="center" justify="center" className={classes.innerGrid}>
													<Grid item xs={12}>
														<TextField label="Firstname" onChange={updateField} name="firstname" fullWidth={true} />
													</Grid>
													<Grid item xs={12}>
														<TextField label="Lastname" onChange={updateField} name="lastname" />
													</Grid>
												</Grid>
												<Grid container direction="column" alignItems="center" className={classes.innerGrid}>
													<Grid item xs={12} style={{width: "50%"}}>
														<TextField label="Email" onChange={updateField} name="email" className={classes.email} error={formErr} />
													</Grid>
													<Grid item xs={12} style={{width: "50%"}}>
														<TextField label="Confirm Email" onChange={updateField} name="emailC" className={classes.email} />
													</Grid>
												</Grid>
												<Grid container direction="column" alignItems="center" className={classes.innerGrid}>
													<Grid item xs={12}>
														<TextField label="Pin" onChange={updateField} name="pinC" error={formErr} InputProps={{maxLength: 6}} />
													</Grid>
													<Grid item xs={12}>
														<TextField label="Confirm Pin" name="pin" onChange={updateField} />
													</Grid>
												</Grid>
												<Grid container direction="column" alignItems="center">
													<Grid item xs={12}>
														<DatePickers setDate={setDate} setAuthen={setAuth} />
													</Grid>
												</Grid>
												<Review firstname={form.firstname} lastname={form.lastname} email={form.email} birthday={date.toDateString()} submit={submitted} registered={registered} />
											</SwipeableViews>
										</form>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item style={{marginTop: "30px"}}>
							<div>
								{activeStep !== steps.length - 1 ? (
									<div>
										<Button disabled={activeStep === 0} onClick={handleBack}>
											Back
										</Button>
										<Button variant="contained" color="primary" onClick={handleNext} disabled={authen}>
											Next
										</Button>
									</div>
								) : (
									<div>
										<div>
											<Button disabled={activeStep === 0} onClick={handleBack}>
												Back
											</Button>

											<Button variant="contained" color="primary" onClick={handleSubmit} disabled={false}>
												Submit
											</Button>
										</div>
									</div>
								)}
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

SignUp.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withFirebase)(SignUp);
