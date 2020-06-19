import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    background-color: ${props => props.theme.colors.base};
    color: ${props => props.theme.colors.grays["100"]};
  }
`;
