import React from 'react'
import {Container} from 'reactstrap'
import Information from './information'

class Contact extends React.Component
{
  render()
  {

    return(<Information page = {'Contact'}>
    Email: <a href='mailto:nishakcrochet@gmail.com'>nishakcrochet@gmail.com</a>
  </Information>)
  }
}


export default Contact
