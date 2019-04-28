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

const styles = theme => ({

  cssLabel: {
    '&$cssFocused': {
      color: red[500],
    },
  },
  cssUnderline: {
   '&:after': {
     borderBottomColor: red[500],
   },
 },
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
    this.state = {firstname: null , lastname: null, email: null, pin: null, emailC: '' , pinC: '' }
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
    <Input name = "firstname" placeholder = "First Name" onChange={this.handleChange.bind(this)} value={this.state.name} autoFocus/>
    </Grid>

    <Grid item>
    <Input name = "lastname" placeholder = "Last Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    <Grid item>
    <Input name = "usertname" placeholder = "User Name" onChange={this.handleChange.bind(this)} value={this.state.name}/>

    </Grid>

    <Grid item>
    <Input name = "email" placeholder = "Email" onChange={this.handleChange.bind(this)} value={this.state.name}/>
    </Grid>

    <Grid item>
    <Input name = "emailC" placeholder = "Confirm Email" onChange={this.handleChange.bind(this)} className = {{
      root:classes.cssLabel,
    focused: classes.cssUnderline}} value={this.state.name}/>

    </Grid>

    <Grid item>
    <Input name = "pin" placeholder = "Pin" onChange={this.handleChange.bind(this)} value={this.state.name}/>

    </Grid>

    <Grid item>
    <Input name = "pinC" placeholder = "Confirm Pin" onChange={this.handleChange.bind(this)} value={this.state.name}/>
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
