import React, {useEffect, useState} from "react";
import {compose} from "recompose";
import Card from "@material-ui/core/Card";
import {withFirebase} from "../../../server/firebase/context";
import Typography from "@material-ui/core/Typography";
import withAuthentication from "../../../server/firebase/Authenication/Authen";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme, ThemeProvider} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
	card: {
		height: 300,
	},
	points: {
		[theme.breakpoints.up("md")]: {
			width: 150,
			height: 150,
		},
		width: 125,
		height: 125,
		borderRadius: 300,
		backgroundColor: theme.palette.secondary.main,
	},
	content: {
		[theme.breakpoints.up("md")]: {
			paddingTop: 25,
		},
	},
	name: {
		[theme.breakpoints.up("md")]: {
			fontSize: 25,
		},
		color: "white",
	},
}));

export function Points(props) {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div style={{}} className={classes.points}>
			<Grid container alignItems="center" justify="center" style={{height: "100%"}}>
				<Grid item xs={12}>
					<Typography align="center" variant="h4">
						{props.points} pts
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}

function Profile(props) {
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		if (!data) fetchUser(props.user);
	});

	const [data, setData] = useState(null);

	const [lastLogin, setLogin] = useState(null);

	const fetchUser = (userid) => {
		props.firebase.db
			.collection("users")
			.doc(userid)
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setData(doc.data());
					console.log("Document data:", doc.data());
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch(function (error) {
				console.log("Error getting document:", error);
			});
	};

	return (
		<div>
			{data ? (
				<Grid container direction="column" alignItems="center" justify="center">
					<Grid item xs={12}>
						<Points points={data.points} />
					</Grid>
					<Grid item className={classes.content}>
						<Typography align="center" variant="h3" className={classes.name}>
							{props.name}
						</Typography>
					</Grid>
					{data.lastLogin ? (
						<Grid item xs={12}>
							<Typography align="right">Last login on: {data.lastLogin.toDate().toLocaleString()}</Typography>
						</Grid>
					) : (
						<Grid item>
							<Typography align="right" style={{color: "white"}}>
								Welcome to the Student Dash!
							</Typography>
						</Grid>
					)}
				</Grid>
			) : (
				<Grid container direction="column" alignItems="center" justify="center">
					<Grid item xs={12}>
						<CircularProgress />
					</Grid>
				</Grid>
			)}
		</div>
	);
}

export default compose(withFirebase, withAuthentication)(Profile);
