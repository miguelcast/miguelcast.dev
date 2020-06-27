import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.base};
    color: ${props => props.theme.colors.grays["100"]};
  }
  
  a,
  a:focus,
  a:visited {
    color: ${props => props.theme.colors.grays["100"]};
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    text-rendering: optimizelegibility;
  }
`;
