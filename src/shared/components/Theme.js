import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

let theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0C47A1",
			light: "#5472D3",
			dark: "#002171",
		},
		secondary: {
			main: "#FCDB03",
			light: "#f9ed40",
			dark: "#fc7d00",
		},
		accent: blue,
		type: "light",
	},
	typography: {
		useNextVariants: true,
		fontFamily: ["Open Sans", "Baloo Chettan"].join(","),
		h3: {
			fontFamily: "Baloo Chettan",
		},
		h4: {
			fontFamily: "Baloo Chettan",
		},
		h5: {
			fontFamily: "Baloo Chettan",
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
