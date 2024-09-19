import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
  body {
    font-family: "Poor Story", system-ui;
    font-weight: 400;
    font-style: normal;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
`;

export default GlobalStyle;
