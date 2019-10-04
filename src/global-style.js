import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
  body, button, input{
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root{
    min-height: 100%;
  }
`
