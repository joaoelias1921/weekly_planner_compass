import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Mulish', sans-serif;
  }
  @media(max-width: 1600px){
    html {
      font-size: 93%;
    }
  }
  @media(max-width: 1360px){
    html {
      font-size: 91%;
    }
  }
  @media(max-width: 768px){
    html {
      font-size: 88%;
    }
  }
  @media(max-width: 320px){
    html {
      font-size: 85%;
    }
  }
  @media(max-width: 280px){
    html {
      font-size: 80%;
    }
  }
  `;
