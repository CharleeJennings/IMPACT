import React, {Children, useState, useEffect} from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Error from "@material-ui/icons/Error";
import compose from "recompose/compose";
import {FirebaseContext, withFirebase} from "../../../server/firebase/context.js";
import Image from "material-ui-image";
import Hidden from "@material-ui/core/Hidden";
import firebase from "firebase";
import Tree from "../utilities/tree";
import {SocialMediaIconsReact} from "social-media-icons-react";
import Icon from "react-simple-icons";
import {Google, Facebook} from "@icons-pack/react-simple-icons";
import {isMobile} from "mobile-device-detect";

import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		paddingLeft: 30,
		paddingRight: 30,
	},

	tree: {
		position: "absolute",
		zIndex: 0,
		height: 65,
		width: 65,
		top: 30,
	},

	input: {
		minWidth: 250,
		maxWidth: 650,
	},

	mask: {
		height: "100%",
		width: "100%",
		backgroundImage: "linear-gradient(-45deg, #5372D3 0%, #FEFF56 100%)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		position: "absolute",
		opacity: 0.5,
		zIndex: 1,
	},
	img: {
		backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/impact-9eaef.appspot.com/o/IMG_0634.jpeg?alt=media&token=3edca0f9-2059-4a7c-9d06-4a32aff73f90)",
		width: "100%",
		height: "100vh",
		opacity: 0.25,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		zIndex: 0,
	},
	photo: {
		width: "50%",
		position: "absolute",
		right: 0,
	},
	button: {
		width: "100%",
		borderRadius: 18,
	},
}));

function FireForm(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const theme = useTheme();
	var provider = new firebase.auth.GoogleAuthProvider();
	var FBprovider = new firebase.auth.FacebookAuthProvider();
	useEffect(() => {
		props.firebase.auth.onAuthStateChanged((authUser) => {
			authUser ? setTimeout(() => props.history.push("/profile"), 1000) : null;
		});
	});

	var FbProvider = new firebase.auth.FacebookAuthProvider();
	const onChange = (event) => {
		if (event.target.name == "email") setEmail(event.target.value);
		if (event.target.name == "password") setPassword(event.target.value);
	};

	const FbAuth = () => {
		if (isMobile) {
			firebase.auth().signInWithRedirect(FBprovider);
			firebase
				.auth()
				.getRedirectResult()
				.then(function (result) {
					if (result.credential) {
						console.log("Made it");
						// This gives you a Google Access Token. You can use it to access the Google API.
						var token = result.credential.accessToken;
						// ...
					}
					// The signed-in user info.
					var user = result.user;
				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log("error code: " + errorCode + "\n" + "Error message:" + errorMessage);
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
				});
		} else {
			firebase
				.auth()
				.signInWithPopup(FbProvider)
				.then(function (result) {
					// This gives you a Google Access Token. You can use it to access the Google API.
					var token = result.credential.accessToken;
					var user = result.user;
					console.log(user.uid);
					console.log(props.firebase);
					props.firebase.providerUser(user.uid, user.displayName);
					setTimeout(() => props.history.push("/profile"), 1000);
					// ...
				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
				});
		}
	};
	const googleAuth = () => {
		if (isMobile) {
			firebase.auth().signInWithRedirect(provider);
			firebase
				.auth()
				.getRedirectResult()
				.then(function (result) {
					if (result.credential) {
						// This gives you a Google Access Token. You can use it to access the Google API.
						var token = result.credential.accessToken;
						// ...
					}
					// The signed-in user info.
					var user = result.user;
				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
				});
		} else {
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(function (result) {
					// This gives you a Google Access Token. You can use it to access the Google API.
					var token = result.credential.accessToken;
					// The signed-in user info.
					var user = result.user;
					// ...
				})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
				});
		}
	};
	const onSub = (event) => {
		console.log(email + " " + password);
		props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then((user) => {
				props.firebase.db.collection("users").doc(user.user.uid).update({
					lastLogin: new Date(),
				});
				props.history.push("/profile");
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				setError(error.message);
			});
		event.preventDefault();
	};

	const classes = useStyles();
	return (
		<div style={{height: "100vh", minHeight: 100}}>
			<Hidden smDown>
				<div className={classes.photo}>
					<div className={classes.mask} />
					<div className={classes.img} />
				</div>
			</Hidden>

			<div className={classes.container}>
				<div className={classes.tree}>
					<Tree />
				</div>

				<Grid container alignItems="center" style={{height: "100vh", minHeight: 700}}>
					{/* Form half */}
					<Grid item xs={12} md={6}>
						<Grid container direction="column" alignItems="center" style={{width: "100%", margin: 0}} spacing={10}>
							<Grid item xs={12}>
								<Grid container direction="column">
									<Grid item xs={12}>
										<Hidden mdUp>
											<Typography variant="h4" color="textPrimary">
												Hello friend,
											</Typography>
										</Hidden>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h3" color="primary">
											Sign into IMPACT
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							{error ? <Typography variant="h6">{error}</Typography> : null}
							<Grid item style={{width: "100%"}}>
								<form onSubmit={onSub}>
									<Grid container direction="column" alignItems="center" spacing={2}>
										<Grid item xs={12} style={{minWidth: 200, maxWidth: 450, width: "100%"}}>
											<TextField name="email" style={{width: "100%"}} value={email} onChange={onChange} label="Email" />
										</Grid>
										<Grid item xs={12} style={{minWidth: 200, maxWidth: 450, width: "100%"}}>
											<TextField name="password" value={password} style={{width: "100%"}} onChange={onChange} label="Password" />
										</Grid>
										<Grid item xs={12} style={{marginTop: 80, width: "100%", maxWidth: 250}}>
											<Button type="submit" size="large" className={classes.button} variant="contained" color="primary">
												Sign In
											</Button>
										</Grid>
										<Hidden mdUp>
											<Grid item style={{padding: "0px", paddingTop: "10px"}}>
												<Button href="/signup" className={classes.button} size="large">
													Sign Up
												</Button>
											</Grid>
										</Hidden>
									</Grid>
								</form>
							</Grid>

							<Typography variant="body1">or sign in with</Typography>
							<Grid container justify="center" alignItems="center" style={{width: 500, paddingTop: 30}}>
								<Grid item xs={2}>
									<IconButton onClick={googleAuth}>
										<Google color="black" size={30} />
									</IconButton>
								</Grid>
								<Grid item xs={2}>
									<IconButton onClick={FbAuth}>
										<Facebook color="black" size={30} />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/* Picture half */}
					<Hidden smDown>
						<Grid item md={6} style={{zIndex: "2", paddingBottom: 111}}>
							<Grid container direction="column" alignItems="center" style={{margin: 0, width: "100%"}} spacing={10}>
								<Grid item>
									<Typography variant="h3" style={{color: "white"}}>
										First Time?
									</Typography>
								</Grid>
								<Grid item xs={12} style={{minWidth: 300, maxWidth: 650, width: "100%"}}>
									<Typography variant="subtitle1" style={{color: "white", fontSize: 24}} align="center">
										If this is you first time visiting us you would need to create an account click the link below to get started
									</Typography>
								</Grid>
								<Grid item xs={12} style={{width: "100%", maxWidth: 250, paddingRight: 0, paddingLeft: 0}}>
									<Button href="/SignUp" variant="outlined" size="large" className={classes.button} style={{color: "white", borderColor: "white"}}>
										Sign Up
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Hidden>
				</Grid>
			</div>
		</div>
	);
}

export default compose(withFirebase)(FireForm);
