import styled from 'styled-components'

const CheckBoxLabel = styled.div`
  font-size: 1.5rem;
  display: block;
  margin: 1rem 0;
`

const SelectButton = styled.button`
  border: 1px solid;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.125rem;
  width: 100%;
  height: 2.5rem;
  outline: none;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.nsLabWhite};
    background: ${({ theme }) => theme.nsLabYellow};
  }
`

const Selection = styled.div`
  display: block;
`


const NextButton = styled.button`
appearance: none;
background-color: ${({ theme }) => theme.nsLabWhite};
border: 0;
cursor: pointer;
padding: 0;
font-weight: 700;
font-size: 1.5rem;
align-items: right;
outline: none;
`

const BackButton = styled.button`
appearance: none;
background-color: ${({ theme }) => theme.nsLabWhite};
border: 0;
cursor: pointer;
padding: 0;
font-weight: 700;
font-size: 1.5rem;
align-items: left;
outline: none;
`

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 8rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 2rem;
  }
`

export {
  CheckBoxLabel,
  SelectButton,
  Selection,
  ButtonContainer,
  NextButton,
  BackButton
}