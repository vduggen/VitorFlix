import React from 'react';

import { Helmet } from 'react-helmet';
import Cadastro from '../index';
import { Link } from 'react-router-dom';

const Video: React.FC = () => {
  return (
    <>
      <Helmet title="Cadastro Video - VitorFlix Official Site" />

      <Cadastro>
        <h1>Cadastro de Video</h1>

        <Link to="/">Voltar para o inicio</Link>
      </Cadastro>
    </>
  );
};

export default Video;
