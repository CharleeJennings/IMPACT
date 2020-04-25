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
import {set} from "date-fns";
import {Datadog} from "@icons-pack/react-simple-icons";

function TopStudent(props) {
	const [user, setUsers] = useState();

	useEffect(() => {
		if (!user) {
			props.firebase.db
				.collection("users")
				.get()
				.then((data) => {
					setUsers(data);
					data.forEach((doc) => {
						console.log(doc.id, "=>", doc.data());
					});
				});
		}
	}, [user]);

	return (
		<TableContainer component={Paper} style={{width: "100%"}}>
			<Table style={{minWidth: 350, width: "100%", maxWidth: 700}}>
				<TableBody>
					{user ? (
						user.docs.map((users) => (
							<TableRow>
								<TableCell>{users.data().name}</TableCell>
								<TableCell>{users.data().points}</TableCell>
							</TableRow>
						))
					) : (
						<CircularProgress />
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default compose(withFirebase, withAuthentication)(TopStudent);
