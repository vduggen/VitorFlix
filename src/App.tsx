import React from 'react';

import Home from './pages/index';
import Reset from './styles/reset';
import GlobalStyle from './styles/GlobalStyle';
import 'minireset.css';

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />

      <Home />
    </>
  )
}

export default App;
