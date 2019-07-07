import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import gql from 'graphql-tag'
import {graphql, Mutation} from 'react-apollo'
import red from '@material-ui/core/colors/red';
import Input from '@material-ui/core/Input';
import Error from '@material-ui/icons/Error'
import DatePicker from 'pikaday-react-wrapper';
import {Redirect, Route} from 'react-router'

import window from 'global'




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
  top: 250,
  position: 'relative',
},

container2:
{
  position: 'relative',
},



})


const ADD_USER = gql`

mutation(  $firstname: String!, $lastname: String!, $email: String!, $password: String!)
{
  createUser( firstname : $firstname, lastname : $lastname, email: $email, password : $password )
  {
    firstname
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
    this.state = {firstname: null , lastname: null, email: '', password: '', emailC: '' , passwordC: '', errorE: false, errorP: false, date : '',sub : false, redirect: false }
    if (__isBrowser__)
    console.log(window);
  }

componentDidMount()
{
    document.body.style.backgroundColor = "#f1f1f1"
}



   handleSubmit = () =>
  {
      this.setState({sub : true})
      setTimeout( () => this.props.history.push('/'), 5000)

  }

  handleChange(event)
  {
    const name = event.target.name

    this.setState({
      [name] : event.target.value,
    })

  if (name == 'emailC' || name == 'email')
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

  if (name == 'passwordC' || name == 'password')
  {
    if ( ! Compare(event.target.value , this.state.password))
    {
      this.setState({errorP: true})

    }
    else
    {
      this.setState({errorP: false})
    }
  }


  }



  render()
  {
    const {classes} = this.props;
    const { date } = this.state;
    return (
         <Grid container  justify='center' className = {classes.container}>
                       <Card className= {classes.card} raised >
          <Mutation mutation = {ADD_USER}>
              {(createUser, {data,loading,error}) =>{

              if (loading) {this.props.history.push('/')}

                  return(
                  <form method='post' onSubmit = {e =>
                    {e.preventDefault();  createUser({ variables:{firstname: this.state.firstname, lastname : this.state.lastname , email: this.state.email, password: this.state.password}  }); console.log(data); }}>
                      <Grid container justify='center' className={classes.container2}>
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
                          <TextField name = "password" placeholder = "Pin" onChange={this.handleChange.bind(this)} value={this.state.name}  inputProps= {{maxLength: "4"}}/>
                          </Grid>
                          <Grid item>
                          <TextField name = "passwordC" placeholder = "Confirm Pin" onChange={this.handleChange.bind(this)} error={this.state.errorP} value={this.state.name} inputProps={{maxLength: "4" }}/>
                          {
                            this.state.errorP &&   <Error/>
                          }
                          </Grid>
                          </Grid>
                          <Button variant='contained' onClick = {this.handleSubmit} className = {classes.button} color="primary" type = 'submit'>
                          Submit
                          </Button>
                          </form>)
                        }
                  }
                </Mutation>
                        </Card>
                        </Grid>
)
}
}

SignUp.propTypes = {
  classes:PropTypes.object.isRequired,
};

export default graphql(ADD_USER, {name: 'createUser'})(withStyles(styles)(SignUp))
