import styled from 'styled-components';
import colors from '../colors';

const Button = styled.button`
  color: ${colors.white};
  border: 1px solid ${colors.white};
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  font: bold 1rem 'Roboto',sans-serif;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;

export default Button;
