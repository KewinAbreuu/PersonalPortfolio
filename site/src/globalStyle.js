import { createGlobalStyle } from 'styled-components'

import Bg from './assets/background.jpg'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
 
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto;

    scroll-behavior: smooth;
  }

  body{
    background-image:url(${Bg});
    max-width: 100vw;
    overflow-x: hidden;
  }
`
