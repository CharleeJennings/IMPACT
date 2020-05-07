import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {AuthUserContext, withFirebase} from "../../../server/firebase/context";
import {compose} from "recompose";
import MenuAppBar from "../NavigationBar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import withAuthentication from "../../../server/firebase/Authenication/Authen";
import TopStudent from "./TopStudent";
import Profile from "./Profile";
import FadeIn from "react-fade-in";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import {Hidden} from "@material-ui/core";
import Bg from "../../../../public/images/Tree.svg";

const useStyles = makeStyles((theme) => ({
	card: {
		padding: 40,
		height: 300,
	},
	paper: {
		border: 0,
		width: 205,
		backgroundColor: theme.palette.primary.dark,
		padding: 45,
	},
	table: {
		[theme.breakpoints.up("md")]: {
			paddingLeft: 300,
			paddingTop: 85,
		},
		paddingTop: 30,
	},
	students: {
		[theme.breakpoints.up("md")]: {
			paddingTop: 100,
		},
		width: "100%",
		maxWidth: 700,
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 25,
	},
	tree: {
		[theme.breakpoints.up("md")]: {
			paddingLeft: 300,
		},
		backgroundImage: `url(${Bg})`,
		height: 400,
		width: "100%",
		bottom: 0,
		backgroundRepeat: "no-repeat",
		position: "absolute",
		backgroundPosition: "50% -40%",
		opacity: 0.2,
		backgroundSize: "600px 500px",
		zIndex: -1,
	},
}));

function StudentDash(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<AuthUserContext.Consumer>
			{(authUser) =>
				authUser ? (
					<div>
						<Hidden mdUp>
							<MenuAppBar />
						</Hidden>
						<Hidden smDown>
							<Drawer
								anchor="left"
								elevation={5}
								style={{width: 250, height: "100vh", position: "absolute"}}
								variant="permanent"
								classes={{
									paper: classes.paper,
								}}>
								<Profile user={authUser.uid} name={authUser.displayName} />
								<Grid container direction="column-reverse" alignItems="center" justify="flex-end">
									<Grid item xs={12} style={{width: "100%", paddingTop: "calc(100vh - 425px)"}}>
										<Button style={{width: "100%"}} variant="contained" color="secondary" onClick={props.firebase.doSignOut}>
											Sign out
										</Button>
									</Grid>
								</Grid>
							</Drawer>
						</Hidden>

						<div style={{backgroundColor: theme.palette.primary.main, position: "absolute", width: "100%", height: 300, zIndex: -1}}></div>
						<Grid container direction="column" justify="center" alignItems="center" className={classes.table}>
							<Hidden mdUp>
								<Grid item>
									<Profile user={authUser.uid} name={authUser.displayName} />
								</Grid>
							</Hidden>
							<Grid item style={{width: "100%", maxWidth: 600, minWidth: 300}}>
								<Typography variant="h4" style={{color: "white"}} align="center">
									Check out other students progress below!
								</Typography>
							</Grid>
							<Grid item className={classes.students}>
								<TopStudent />
							</Grid>
						</Grid>

						<div className={classes.tree} />
					</div>
				) : authUser === undefined ? (
					<Grid container direction="column" justify="center" alignItems="center" style={{height: "100vh"}}>
						<CircularProgress />
					</Grid>
				) : (
					<Grid container alignItems="center" justify="center" style={{height: "100vh"}}>
						<Card style={{padding: "50px"}}>
							<Typography>
								Please <a href="/">sign into </a> Impact first! :)
							</Typography>
						</Card>
					</Grid>
				)
			}
		</AuthUserContext.Consumer>
	);
}
export default compose(withFirebase, withAuthentication)(StudentDash);
