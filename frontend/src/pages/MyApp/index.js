import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { login } from '../../utils/auth';

export default withRouter(class MyApp extends React.Component { 
  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);

    const response = await axios.post('http://localhost:3333/authenticate/google', {
      code: query.code
    });

    const token = response.data.access_token;

    login(token);

    this.props.history.push('/private');
  }

render() {
  return (
    <h1>Well come to the app!</h1>
  );
}
}) 
