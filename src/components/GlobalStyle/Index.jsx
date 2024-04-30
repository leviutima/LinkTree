import { createGlobalStyle } from 'styled-components'

const EstilosGlobais = createGlobalStyle`
  body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default EstilosGlobais