import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

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
  top: 300,
  position: 'relative',
}

})


const ADD_USER = gql`

mutation(  $firstname: String!, $lastname: String!, $email: String!, $password: String!)
{
  createUser( firstname : $firstname, lastname : $lastname, email: $email, password : $password )
  {
    password
  }
}
`;

function Compare(field1, field2)
{
  if (field1 === field2 )
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
    this.state = {firstname: null , lastname: null, email: null, password: null, emailC: '' , passwordC: '' }
  }




  handleChange(event)
  {
    const name = event.target.name

    this.setState({
      [name] : event.target.value,
    })

  if (name == 'emailC')
  {
    if (Compare(event.target.value , this.state.email))
    {

    }
    else
    {

    }
  }


  }

  register = () =>
  {
    this.props.createUser({ variables:{firstname: this.state.firstname, lastname : this.state.lastname , email: this.state.email, password: this.state.password}  })
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
    <TextField name = "firstname" label = "First Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    <Grid item>
    <TextField name = "lastname" label = "Last Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    <Grid item>
    <TextField name = "usertname" label = "User Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>

    </Grid>

    <Grid item>
    <TextField name = "email" label = "Email" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    <Grid item>
    <TextField name = "emailC" label = "Confirm Email" onChange={this.handleChange.bind(this)} value={this.state.name}/>

    </Grid>

    <Grid item>
    <TextField name = "password" label = "Password" onChange={this.handleChange.bind(this)} value={this.state.name}/>

    </Grid>

    <Grid item>
    <TextField name = "passwordC" label = "Confirm Password" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    </Grid>
    </Card>
    <Button variant='contained' onClick= {() => this.register() } className = {classes.button}>
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
