import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme, ThemeProvider} from "@material-ui/core/styles";
import {compose} from "recompose";
import withAuthentication from "../../../server/firebase/Authenication/Authen";
import {AuthUserContext, withFirebase} from "../../../server/firebase/context";
import Button from "@material-ui/core/Button";
import TopStudent from "../StudentDash/TopStudent";

const useStyles = makeStyles((theme) => ({
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
}));

function TeacherSuit(props) {
	const theme = useTheme();
	const classes = useStyles();
	return (
		<div>
			<div style={{backgroundColor: theme.palette.primary.main, position: "absolute", width: "100%", height: 300, zIndex: -1}}></div>
			<Grid container direction="column" justify="center" alignItems="center" style={{width: "100vw", position: "relative", top: 235}} spacing={10}>
				<Grid item xs={12} className={classes.students}>
					<TopStudent edit />
				</Grid>
				<Grid item xs={12} style={{maxWidth: 300}}>
					<Button
						style={{width: "100%"}}
						variant="contained"
						color="secondary"
						onClick={() => {
							props.firebase.doSignOut();
							props.history.push("/");
						}}>
						Sign out
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default compose(withFirebase, withAuthentication)(TeacherSuit);
