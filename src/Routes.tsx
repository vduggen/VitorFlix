import React, { Suspense } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Notfound from './pages/404/index';
import Video from './pages/Cadastro/Video/index';
import Categoria from './pages/Cadastro/Categoria/index';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cadastro/Video" exact component={Video} />
        <Route path="/Cadastro/Categoria" exact component={Categoria} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
