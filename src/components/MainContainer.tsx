import React from 'react'
import styled, { css } from 'styled-components'
import { stringToColor } from '../utils'

interface IMainState {
  inputText: string,
  isConvertAvailable: boolean;
}

export default class Main extends React.Component<{}, IMainState> {
  state: IMainState = {
    inputText: '',
    isConvertAvailable: false,
  }

  render() {
    return (
      <MainContainer>
        <InputContainer>
          <InputBox
            type='string'
            maxLength={10}
            onChange={this.onTextInput}
          />
          <Button
            disabled={!this.state.isConvertAvailable}
            onClick={this.onClickConvertButton}
            isConvertAvailable={this.state.isConvertAvailable}
          >
            변환
          </Button>
        </InputContainer>
        <Space />
        <PictureContainer>

        </PictureContainer>
      </MainContainer>
    )
  }

  onTextInput = (event: any) => {
    if (event.target.value.length != 0) {
      this.setState({
        inputText: event.target.value,
        isConvertAvailable: true,
      })
    } else {
      this.setState({
        inputText: '',
        isConvertAvailable: false,
      })
    }
  }

  onClickConvertButton = () => {
    console.log(this.state.inputText)
    console.log(stringToColor(this.state.inputText))
    console.log(this.state.isConvertAvailable)
    stringToColor(this.state.inputText)
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Space = styled.div`
  flex: 1;
`

const InputContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputBox = styled.input`
  width: 100%;
  height: 1.25rem;
  display: flex;
  text-align: center;
  border: 0;
  border-radius: .125rem;
  font-size: .7rem;
  flex: auto;
  margin-right: 0.25em;
  outline: none;
  background-color: rgba(0, 0, 0, .1);
  color: #000;
`

interface IColorProps {
  isConvertAvailable: boolean
}

const Button = styled.button<IColorProps>`
  appearance: none;
  background-color: #868e96;
  color: #fff;
  cursor: pointer;
  border-radius: .125rem;
  border: 0px;
  font-size: .6rem;
  width: 2.5rem;
  height: 1.25rem;
  outline: none;
  ${(props) => props.isConvertAvailable && css`
    background-color: #3b5bdb;
  `}
`

const PictureContainer = styled.div`
`