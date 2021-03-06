import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;

  padding: 2px;
}

body {
  background-color: #f5f5f5;
}

body,
input,
button {
  font-family: Arial, Helvetica, sans-serif;
}
`;

export default GlobalStyle;