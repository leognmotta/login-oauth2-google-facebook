import React, { Component } from 'react';
import axios from 'axios';
import { getToken } from '../../utils/auth';
import { withRouter } from 'react-router-dom';

export default withRouter(class Private extends Component {
  state = {
    secretMessage: ''
  }

  async componentDidMount() {
    const token = getToken();

    const message = await axios.get('http://localhost:3333/private', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    this.setState({ secretMessage: message.data.private_message }); 
  }


  render() {
    return <h1>{this.state.secretMessage}</h1>;
  }
}) 

