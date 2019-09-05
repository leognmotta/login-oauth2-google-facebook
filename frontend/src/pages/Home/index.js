import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { FaGoogle, FaFacebookF } from 'react-icons/fa';

import { Container } from './styles';

export default function Home() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function loadUrl() {
      const response = await axios.get('http://localhost:3333/auth/google');

      console.log(response.data);
      setUrl(response.data);
    }

    loadUrl();
  }, []);

  const responseFacebook = async (response) => {
    await axios.post('http://localhost:3333/authenticate/facebook', {
      response
    });
  }

  return (
    <Container>
      <div>
        <h1>Login</h1>
        <FacebookLogin
          appId="2997059460336350"
          autoload={false}
          fields="name,email,picture"
          callback={responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick} class="facebook">
              <FaFacebookF />
              Login with facebook
            </button>
          )}
        />

        <a href={url}>
          <FaGoogle />
          Login with google
        </a>
      </div>
    </Container>
  );
}
