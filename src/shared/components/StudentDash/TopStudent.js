import React, {useEffect, useState} from "react";
import {compose} from "recompose";
import {withFirebase} from "../../../server/firebase/context";
import Typography from "@material-ui/core/Typography";
import withAuthentication from "../../../server/firebase/Authenication/Authen";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {withRouter, useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	paper: {
		maxWidth: 600,
		minWidth: 300,
		height: 200,
		width: "100%",
	},
}));

function TopStudent(props) {
	const [user, setUsers] = useState();
	const [open, setOpen] = useState(false);
	const [points, setPoints] = useState(0);
	const [selectedUser, setSelectUser] = useState();
	const classes = useStyles();

	const setUserPoints = (points) => {
		console.log("Here");

		props.firebase.db
			.collection("users")
			.doc(selectedUser.uid)
			.update({points: points})
			.then(() => {
				setOpen(false);
				location.reload();
			});
	};

	function TeacherModal(props) {
		return (
			<Modal open={open} onClose={() => setOpen(false)}>
				<div container style={{position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)"}}>
					<Paper className={classes.paper}>
						<Grid container direction="column" justify="center" alignItems="center" spacing={3}>
							<Grid item>
								<Typography>{props.name}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Grid container justify="center" alignItems="center" spacing={5}>
									<Grid item>
										<Fab
											onClick={() => {
												setPoints(points + 1);
											}}
											color="primary">
											<AddIcon />
										</Fab>
									</Grid>
									<Grid item>{props.points}</Grid>
									<Grid item>
										<Fab
											onClick={() => {
												setPoints(points - 1);
											}}
											color="primary">
											<RemoveIcon />
										</Fab>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container justify="flex-end" spacing={3}>
									<Grid item>
										<Button
											onClick={() => {
												setOpen(false);
											}}>
											Cancel
										</Button>
									</Grid>
									<Grid item>
										<Button
											onClick={() => {
												setUserPoints(points);
											}}
											variant="contained"
											color="primary">
											Save
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</div>
			</Modal>
		);
	}

	useEffect(() => {
		if (!user) {
			props.firebase.db
				.collection("users")
				.where("role", "==", "student")
				.get()
				.then((data) => {
					setUsers(data);
					data.forEach((doc) => {
						console.log(doc.id, "=>", doc.data());
					});
				});
		}
	}, [user]);

	return user ? (
		<div>
			{selectedUser ? <TeacherModal points={points} name={selectedUser.name} /> : null}
			<TableContainer component={Paper} style={{width: "100%"}}>
				<Table style={{minWidth: 350, width: "100%", maxWidth: 700}}>
					<TableBody>
						{props.edit
							? user.docs.map((users) => (
									<TableRow
										hover
										onClick={() => {
											setOpen(true);
											setPoints(users.data().points);
											setSelectUser(users.data());
										}}>
										<TableCell>
											<Typography>{users.data().name}</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography>{users.data().points} points </Typography>
										</TableCell>
									</TableRow>
							  ))
							: user.docs.map((users) => (
									<TableRow>
										<TableCell>
											<Typography>{users.data().name}</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography>{users.data().points} points </Typography>
										</TableCell>
									</TableRow>
							  ))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	) : (
		<Grid container justify="center" direction="column" alignItems="center">
			<Grid item xs={12}>
				<CircularProgress color="secondary" />
			</Grid>
		</Grid>
	);
}

export default compose(withFirebase, withAuthentication)(TopStudent);
