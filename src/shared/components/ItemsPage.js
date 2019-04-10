import React from 'react'
import {Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import gql from 'graphql-tag'
import { Query, graphql} from 'react-apollo'
import '../static/css/ItemPage.css'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';


const Get_Nisha = gql`{
	users
{
username
password
admin
accessCode
}

}`;

const updateAccess = gql`

  mutation($id :ID!, $accessCode: String!)
{
  updateAccess(id: $id, accessCode: $accessCode,  )
	{
		username
	}

}

`;

//PICTURE GRID
const Grid = (props) =>
{
  if (props.items)
  {
    return (<Container fluid id = "photos">
      <Row>
      <Col>
     { props.items.map((item, i) => { return  <img key={item.id} id="photo" src= {item.images.standard_resolution.url}/>

 }) }
      </Col>
      </Row>
      </Container>);

  }
    return (<div></div>);
}


class ItemsPage extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {items: null, loaded: false , url: null, access_code: null }
    this.fetchImages = this.fetchImages.bind(this)
    this.updateAccess = this.updateAccess.bind(this)

  }

// MUTATION FOR ACCESSCODE USER
  updateAccess()
  {
    console.log(window.__INITIAL_DATA__.passport);
    console.log(this.state.access_code);
		console.log(process.env.NODE_ENV);
    this.props.updateAccess({

      variables:
      {
        id : window.__INITIAL_DATA__.passport.user,
        accessCode: this.state.access_code
      }
    })
  }


/// FETCH INSTAGRAM PICTURES
  fetchImages(ac)
  {
    var API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + ac


    console.log(API);
  axios.get(API)
  .then(result =>  {

    const photos = result
    this.setState({ items: photos.data.data, loaded: true }, () => console.log(this.state.items))
    });

  }

  componentDidMount()
  {
    var regex = /(?:.*)(?:access_token=(.*))/
    this.setState({ url : window.location.href})

  console.log(window.__INITIAL_DATA__);

    if( regex.test(window.location.href) && window.__INITIAL_DATA__.passport.user )
    {
      var match = regex.exec(window.location.href)
      this.setState ({ access_code : match[1]}, this.updateAccess)


    }

  }

  render () {
    return (
      <div>
            <Query query={Get_Nisha}>
  	         {

               ({loading ,data, error}) =>
               {
                 if (loading) return <h1 id='photos'> Loading </h1>;
                 if (error) return console.log(error);
                 if (data.users[0] == null )
                 {
  	                return <h1 id='photos'> Contact Charles to create account </h1>
                 }
                else if( data.users[0].accessCode && !this.state.loaded )
                 {
                    this.fetchImages(data.users[0].accessCode)
  	                return(<div></div>)
                }
                else if (this.state.loaded)
                {
                  return <Grid items = {this.state.items}/>

                }
                else  if( data.users[0] != null )
                      return (<h1 id= 'photos'>You must first <a href='login'> log into Instagram </a> </h1>);
                }

            }
           </Query>

        </div>

);
}
}

export default graphql(updateAccess, {name: 'updateAccess'})(ItemsPage)
