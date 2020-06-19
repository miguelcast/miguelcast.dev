import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.font.body};
    background-color: ${props => props.theme.colors.base};
    color: ${props => props.theme.colors.grays["100"]};
  }
`;
