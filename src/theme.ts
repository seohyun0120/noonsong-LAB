import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
  nsLabWhite: '#FFFFFF',
  nsLabBlack: '#000000',
  nsLabGray: '#757575',
  nsLabGold: '#84754e',
  nsLabBlue: '#003087',
  nsLabSkyBlue: '#0072ce',
  mobile: '576px'
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
