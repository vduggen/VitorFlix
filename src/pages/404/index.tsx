import React from 'react';

import { Container } from './styles';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/index';

const Notfound: React.FC = () => {
  return (
    <>
      <Helmet title="Não Encontrado - VitorFlix Official Site" />

      <Header />

      <Container />
    </>
  );
};

export default Notfound;
