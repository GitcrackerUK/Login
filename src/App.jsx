import React from 'react';
import { createGlobalStyle} from 'styled-components';
import Layout from './components/common/layout'


const GlobalStyles = createGlobalStyle`
    body{
  
  
    }
`;

function App(props) {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Layout>

      </Layout>
    </div>
  );
}

export default App;