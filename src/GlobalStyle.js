import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
`;

export default GlobalStyle;
