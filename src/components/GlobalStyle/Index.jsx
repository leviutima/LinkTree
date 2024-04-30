import { createGlobalStyle } from 'styled-components'
import GandhiSansRegular from './font/GandhiSans-Regular.otf'
import GandhiSansBold from './font/GandhiSans-Bold.otf'



const EstilosGlobais = createGlobalStyle`

@font-face {
  font-family: 'GandhiSansRegular';
  src: local('Gandhi Sans Regular'), local('Gandhi Sans Regular'), url(${GandhiSansRegular});
}

@font-face {
  font-family: 'GandhiSansBold';
  src: local('Gandhi Sans Bold'), local('Gandhi Sans Bold'), url(${GandhiSansBold});
}

  body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      font-family: 'GandhiSansRegular';
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default EstilosGlobais