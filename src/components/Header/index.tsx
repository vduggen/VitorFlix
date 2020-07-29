import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <Container className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="Logo VitorFlix" width="168" />
      </Link>

      <nav>
        <Link className="ButtonLink" to="/Cadastro/Video">
          Novo vídeo
        </Link>

        <Link className="ButtonLink" to="/Cadastro/Categoria">
          Novo Categoria
        </Link>
      </nav>
    </Container>
  );
};

export default Menu;
