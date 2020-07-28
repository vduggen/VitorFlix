import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.footer`
  background: ${colors.black};
  border-top: 2px solid ${colors.primary};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: ${colors.white};
  text-align: center;

  p {
    font: 500 1rem 'Roboto',sans-serif;

    a {
      text-decoration:none;
      color:#DC1A28;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export default Container;
