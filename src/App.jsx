import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from 'components/pages/home'
import Login from 'components/pages/login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const GlobalStyles = createGlobalStyle`
    body{
      padding:0px;
      margin:0px;
      font-family: 'Lato', sans-serif ;
    }
`;
const theme = {
PrimaryColor:'#f8049c',
SecondaryColor:'#fdd54f',
LightGreen:'#81c784',
DarkGreen:'#2e7d32'
}

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;