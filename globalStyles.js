import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #e5dbdb;
}
`

export default GlobalStyle