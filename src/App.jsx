import React, {useState} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from 'components/pages/home'
import Login from 'components/pages/login'
import LightTheme from 'Themes/light'
import DarkTheme from 'Themes/dark'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const GlobalStyles = createGlobalStyle`
    body{
      background-color:${p=> p.theme.BodyColor};
      color:${p=> p.theme.TextColor};
      padding:0px;
      margin:0px;
      font-family: 'Lato', sans-serif ;
    }
`;
function App(props) {
  const [theme, setTheme] = useState(LightTheme)
  return (
    <ThemeProvider theme={{...theme, setTheme: ()=>{
     setTheme((s)=> { return (s.id === 'light'? DarkTheme: LightTheme
     )} );
     
    }}}>
      
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