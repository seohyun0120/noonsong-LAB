import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryWhite};
    color: ${({ theme }) => theme.primaryBlack};
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    height: 100%;
    text-rendering: optimizeLegibility;
    overflow: hidden;
  }
`
