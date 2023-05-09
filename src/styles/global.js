import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-primary-color: ${(props) => props.theme.backgroundColors.primary};
    --bg-secondary-color: ${(props) => props.theme.backgroundColors.secondary};
    --bg-grey-color: ${(props) => props.theme.backgroundColors.grey};
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-grey: ${(props) => props.theme.colors.grey};
    
  }

  html {
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 50%;
    }

    @media (max-width: 400px) {
      font-size: 40%;
    }

    @media (max-width: 375px) {
      font-size: 30%;
    }
  }

  body {
    background-color: var(--bg-primary-color);
    font-size: 1.6rem;
    color: var(--color-primary);
    font-family: 'Source Sans Pro', sans-serif;
  }

`
