import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from "@material-ui/pickers";

const DateContext = React.createContext();

const useStyles = makeStyles({
	grid: {
		width: "100%",
	},
});

export default function DatePickers(props) {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const classes = useStyles();

	function handleDateChange(date) {
		setSelectedDate(date);
		props.setDate(date);
		props.setAuthen(false);
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container className={classes.grid} justify="space-around">
				<KeyboardDatePicker
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="mui-pickers-date"
					label="Date picker"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}
