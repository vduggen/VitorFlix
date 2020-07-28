import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../../styles/Button/styles';

const Menu: React.FC = () => {
  return (
    <Container className="Menu">
      <img src={Logo} className="Logo" alt="Logo VitorFlix" width="168" />

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </Container>
  );
};

export default Menu;
