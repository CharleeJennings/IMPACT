import {
  createMuiTheme,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';





const theme = createMuiTheme({
  palette: {
    primary: blue ,
    secondary: {main: '#FFFFFF'},
    accent: blue,
    type: 'light',
  },
  typography:
  {
    useNextVariants: true,
    fontFamily: ['Baloo Chettan','Raleway'].join(','),
  }
});

export default theme
