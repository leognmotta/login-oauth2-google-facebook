import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  width: 100%;
  max-width: 320px;
  height: 200px;

  border: 1px solid #c2c2c2;
  border-radius: 4px;

  h1 {
    margin-bottom: 20px;
  }

  a, button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    text-decoration: none;
    border: 0;
    border-radius: 4px;
    height: 48px;
    width: 100%;
    font-size: 16px;
    background-color: #df4723;
    font-weight: bold;
    color: #f5f5f5;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;

    svg {
      margin-right: 10px;
    }
  }

  .facebook {
    background-color: #405EAC;
  }
}
`;