import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';

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


  return (
    <Container>
      <div>
        <h1>Login</h1>
        <a href={url}> 
          <FaGoogle /> 
          Login with google
        </a>
      </div>
    </Container>
  );
}
