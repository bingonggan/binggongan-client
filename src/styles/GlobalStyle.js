import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poor Story", system-ui;
    font-weight: 400;
    font-style: normal;  }
`;

export default GlobalStyle;
