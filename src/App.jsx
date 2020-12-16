import React from 'react';
import { createGlobalStyle } from 'styled-components';
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
    }
`;

function App(props) {
  return (
    <div>
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
    </div>
  );
}

export default App;