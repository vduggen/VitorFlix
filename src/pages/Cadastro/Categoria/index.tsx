import React from 'react';

import { Helmet } from 'react-helmet';
import Cadastro from '../index';
import { Link } from 'react-router-dom';

const Categoria: React.FC = () => {
  return (
    <>
      <Helmet title="Cadastro Categoria - VitorFlix Official Site" />

      <Cadastro>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">Voltar para o inicio</Link>
      </Cadastro>
    </>
  );
};

export default Categoria;
