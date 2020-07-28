import React from 'react';

import Container from './styles';
import Logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://www.alura.com.br/">
        <img src={ Logo } alt="Logo VitorFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </Container>
  );
}

export default Footer;
