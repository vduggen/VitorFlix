import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import 'minireset.css';
import Routes from './Routes';
import LoadingEffect from './assets/loading.svg';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <>
      <GlobalStyle />

      <Routes />

      <div id="container-loading" style={{ display: loading === false ? 'none' : 'flex' }}>
        <img src={LoadingEffect} alt="Effect Loading" />
      </div>
    </>
  );
};

export default App;
