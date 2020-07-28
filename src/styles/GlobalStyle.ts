import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
    background: ${colors.bg};
  }

  @media (max-width: 800px) {
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
`

export default GlobalStyle;
