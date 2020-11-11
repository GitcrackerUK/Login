import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Button, Card } from './components/index'

const GlobalStyles = createGlobalStyle`
    body{
    margin:0px;
     padding:0px;
     background-color:#f5f1f1;
     font-family: 'Goldman', cursive;
     color:green;
    font-size:10px;
    }
`;

function App(props) {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <h1>Hello</h1>
      <Button><h1>Click!!</h1></Button>
      <Button disabled><h1>Click!!</h1></Button>
      {/* <Card></Card> */}
    </div>
  );
}

export default App;