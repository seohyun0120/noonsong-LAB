import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
  nsLabWhite: '#FFFFFF',
  nsLabBlack: '#000000',
  nsLabGray: '#757575',
  nsLabGold: '#D8B17E',
  nsLabBlue: '#1F3263',
  mobile: '576px'
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
