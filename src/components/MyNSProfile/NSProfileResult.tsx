import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface IResult {
  values: {
    nickname: string,
    function2: number,
    function3: number,
    function4: number,
    function5: number,
  }
  prevStep: () => void
}

export class NSProfileResult extends React.Component<IResult> {
  constructor(props: IResult) {
    super(props)
  }

  back = (e: any) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    return (
      <>
        <Container>
          <h1>닉네임: {this.props.values.nickname}</h1>
          <h1>2번 질문 대답: {this.props.values.function2}</h1>
          <h1>3번 질문 대답: {this.props.values.function3}</h1>
          <h1>4번 질문 대답: {this.props.values.function4}</h1>
          <h1>5번 질문 대답: {this.props.values.function5}</h1>
        </Container>
        <ButtonContainer>
          <BackButton
            onClick={this.back}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '1rem' }} />
            back
          </BackButton>
        </ButtonContainer>
      </>
    )
  }
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 5rem;
  text-align: left;
  font-weight: 700;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem 2rem;
  }
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

export default NSProfileResult;