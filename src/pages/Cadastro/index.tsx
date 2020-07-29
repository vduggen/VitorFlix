import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

const Cadastro: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      <Container>{children}</Container>

      <Footer />
    </>
  );
};

export default Cadastro;
