import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import red from '@material-ui/core/colors/red';
import Input from '@material-ui/core/Input';
import Error from '@material-ui/icons/Error'


const styles = theme => ({


card:
{
  minWidth: 275,
  padding: 50,
  width: 300,
},

button:
{

    margin: theme.spacing.unit,
},

container:
{
  top: 150,
  position: 'relative',
}

})


const ADD_USER = gql`

mutation(  $firstname: String!, $lastname: String!, $email: String!, $pin: String!)
{
  createUser( firstname : $firstname, lastname : $lastname, email: $email, pin : $pin )
  {
    pin
  }
}
`;

function Compare(field1, field2)
{

  var length = field1.length

  var buffer = field2.substring(0,length)

  if (field1 === buffer )
  {
    return true
  }
 else
 {
    return false
 }

}

class SignUp extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {firstname: null , lastname: null, email: null, pin: null, emailC: '' , pinC: '', errorE: false, errorP: false }
  }




  handleChange(event)
  {
    const name = event.target.name

    this.setState({
      [name] : event.target.value,
    })

  if (name == 'emailC')
  {
    if ( ! Compare(event.target.value , this.state.email))
    {
      this.setState({errorE: true})

    }
    else
    {
      this.setState({errorE: false})
    }
  }


  }

  register = () =>
  {

    this.props.createUser({ variables:{firstname: this.state.firstname, lastname : this.state.lastname , email: this.state.email, pin: this.state.pin}  })
  };



  render()
  {
    const {classes} = this.props;
    return (
         <Grid container  justify='center' className = {classes.container}>


    <form method='post'>
    <Card className= {classes.card}>
    <Grid container direction='column'>

    <Grid item>
    <TextField  name = "firstname" placeholder = "First Name" onChange={this.handleChange.bind(this)} value={this.state.name} autoFocus/>
    </Grid>

    <Grid item>
    <TextField name = "lastname" placeholder = "Last Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>


    <Grid item>
    <TextField name = "email" placeholder = "Email" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    <Grid item>
    <TextField name = "emailC" placeholder = "Confirm Email" onChange={this.handleChange.bind(this)} error={this.state.errorE} value={this.state.name}/>
{
    this.state.errorE &&   <Error/>
}
    </Grid>

    <Grid item>
    <TextField name = "pin" placeholder = "Pin" onChange={this.handleChange.bind(this)} value={this.state.name}  inputProps= {{maxLength: "4"}}/>

    </Grid>

    <Grid item>
    <TextField name = "pinC" placeholder = "Confirm Pin" onChange={this.handleChange.bind(this)} value={this.state.name} inputProps={{maxLength: "4" }}/>

    </Grid>

    </Grid>
    </Card>
    <Button variant='contained' onClick= {() => this.register() } className = {classes.button} color="primary">
    Submit
    </Button>
    </form>
      </Grid>);
  }
}

SignUp.propTypes = {
  classes:PropTypes.object.isRequired,
};

export default graphql(ADD_USER, {name: 'createUser'})(withStyles(styles)(SignUp))
