import { createGlobalStyle } from 'styled-components';
import { colors } from './vars';

const globalStyle = createGlobalStyle`
html {
  background-color: ${colors.lightest};
}
body {
  color: ${colors.primary};
  font-family: sans-serif;
  font-size: 16px;
  height: 100%;
}


`
export default globalStyle