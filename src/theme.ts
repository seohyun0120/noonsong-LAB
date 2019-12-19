import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
  primaryHover: '#ffa8a8',
  primaryWhite: '#FFFFFF',
  primaryBlack: '#000000',
  primaryBlue: '#a5d8ff',
  mobile: '576px'
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
