import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { withStyles } from "@material-ui/core/styles";

export default function StudentDash(props) {
	if (props.passport.passport) {
		const user = props.passport.passport.user;
		const { data, loading, error } = useQuery(FETCH_USER, {
			variables: { id: user },
		});

		if (loading) return <h1>loading</h1>;

		if (error) return <h1>Error</h1>;
	}

	return (
		<Grid container justify="center" spacing={10}>
			<Grid item xs={6}>
				<Card>Card one</Card>
			</Grid>
			<Grid item xs={6}>
				<Grid container>
					<Card style={{ height: "100%", width: "100%" }}>
						<Grid container></Grid>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}
