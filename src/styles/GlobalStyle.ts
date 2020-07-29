import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  html,body, #root {
    background: ${colors.bg};
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;

    display:flex;
    flex-direction:column;

    #container-loading {
      width: 100%;
      height:100vh;
      background: ${colors.grayLight};
      z-index:999;

      position:fixed;
      top:0;

      display:flex;
      align-items:center;
      justify-content:center;

      img {
        width: 120px;
        height: 120px;
      }
    }
  }
`;

export default GlobalStyle;
