import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'




const styles = theme => ({

  button: {
      margin: theme.spacing.unit,
    },
  card: {
   minWidth: 275,
   width: 300,
   padding: 50,
 },
container:
{
  position: 'relative',
  top:300,
},
  textField: {

  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  header:
  {
    position: 'absolute',
    top: -100,
  },
});


class TextFields extends React.Component {


constructor(props)
{

  super(props)
  this.state = {
    username: '',
    password: '',

  };
}
handleChange(event)
{
  const name = event.target.name
  this.setState({
    [name] : event.target.value,
  })
}

  render() {
    const { classes } = this.props;

    return (
        <Grid container justify='center' className = {classes.container}>

        <form noValidate autoComplete="off" method="post" action="/login">
        <Grid container direction='column' justify='center'>
        <Card className={classes.card} >
        <Grid item>
        <TextField
          id="standard-name"
          label="Name"
          name='username'
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange.bind(this)}

        />
        </Grid>
        <Grid item>
        <TextField
          id="standard-name"
          label="Password"
          name='password'
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange.bind(this)}

        />
        </Grid>



    </Card>
    </Grid>
    <Button variant="contained" color='primary' className={classes.button} type='submit'>
    Log In
  </Button>
  <Button variant='contained' color= 'primary' className={classes.button} href='/signup'>
    Sign up
  </Button>

    </form>
</Grid>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
