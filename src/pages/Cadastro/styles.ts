import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.main`
  background-color: ${colors.black};
  color: ${colors.white};
  flex: 1;
  padding: 95px 5% 0 5%;

  h1 {
    font: bold 2.5rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
    font: 400 1rem 'Roboto', sans-serif;
  }
`;
