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


const field = [

{
  id: 1,
  name: 'firstname' ,
  label: 'First name',
},
{
  id: 2,
  name: 'lastname',
  label:'Last name',
},
{
  id: 3,
  name: 'email',
  label: 'Email',
  W: true
},
{
  id: 4,
  name: 'cemail',
  label: 'Confirm Email',
  W: true,
},
{
  id: 5,
  name: 'password',
  label: 'Password'
},
{
  id: 6,
  name: 'cpassword',
  label: 'Confirm Password',

}

]

const ADD_USER = gql`

mutation(  $firstname: String!, $lastname: String!, $email: String!, $password: String!)
{
  createUser( firstname : $firstname, lastname : $lastname, email: $email, password : $password )
  {
    password
  }
}
`;


class SignUp extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {firstname: null , lastname: null, email: null, password: null }
  }

  handleChange(event)
  {
    const name = event.target.name
    this.setState({
      [name] : event.target.value,
    })
  }




  render()
  {
    const {classes} = this.props;
    return (
         <Grid container  justify='center' className = {classes.container}>


    <form method='post'>
    <Card className= {classes.card}>
    <Grid container direction='column'>
    {field.map((field, i)=>{return <Grid key={field.id} item><TextField fullWidth={field.W} label={field.label} name={field.name} value={this.state.name} onChange={this.handleChange.bind(this)}/> </Grid>})}
    </Grid>
    </Card>
    <Button variant='contained' onClick= {() =>this.props.createUser({ variables:{firstname: this.state.firstname, lastname : this.state.lastname , email: this.state.email, password: this.state.password}})} className = {classes.button}>
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
