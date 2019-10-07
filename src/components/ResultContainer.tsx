import React from 'react'
import styled from 'styled-components'
import myImg from '../assets/default_noonsong.png'

interface IResultProps {
  personalNickName: string
  personalColor: string
  isPersonalReady: boolean
}

export default class ButtonBox extends React.Component<IResultProps> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <>
        {this.props.isPersonalReady ?
          <ResultContainer>
            <Description>
              '{this.props.personalNickName}' 눈송이만의 색상은
              <Label
                personalColor={this.props.personalColor}
                > 
                {this.props.personalColor} 
              </Label>
            </Description>
            <Picture
              src={myImg}
              personalColor={this.props.personalColor}
              title='my_random_noonsong'
            />
          </ResultContainer>
          :
          <Description>자신만의 닉네임을 입력한 후 '변환' 버튼을 클릭해보세요.</Description>
        }
      </>
    )
  }
}

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 500;
  display: flex;
`

interface IColorProps {
  personalColor: string
}

const Picture = styled.img<IColorProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.personalColor}
`

const Label = styled.div<IColorProps>`
  margin-left: .15rem;
  color: ${(props) => props.personalColor}
`
