import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: { main: "#FCDB03" },
    accent: blue,
    type: "light"
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Baloo Chettan", "Raleway", "Pacifico"].join(",")
  }
});

export default theme;
