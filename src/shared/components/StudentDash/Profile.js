import React, {useEffect, useState} from "react";
import {compose} from "recompose";
import Card from "@material-ui/core/Card";
import {withFirebase} from "../../../server/firebase/context";
import Typography from "@material-ui/core/Typography";
import withAuthentication from "../../../server/firebase/Authenication/Authen";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(() => ({
	card: {
		height: 300,
	},
}));

export function Points(props) {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div style={{width: 150, height: 150, backgroundColor: props.color, borderRadius: 300}}>
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
						<Points points={data.points} color={theme.palette.secondary.main} />
					</Grid>
					<Grid item>
						<Typography align="center" variant="h5" style={{color: "white"}}>
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
