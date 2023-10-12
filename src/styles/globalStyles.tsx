import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  p {
    line-height: 1.5;
    font-size: 0.9rem;
    font-weight: 300;
    color: #494c4d;
  }


  h2 {
      padding: 1rem 0;

      line-height: 1.5;
      font-size: 1.5rem;
      font-weight: 300;
    }

  h3 {
    padding: 1rem 0;
    font-size: 1.1rem;
    font-weight: 300;
  }

  h4 {
    font-size: 0.95rem;
    font-weight: 400;
  }
`;

export default GlobalStyle;
