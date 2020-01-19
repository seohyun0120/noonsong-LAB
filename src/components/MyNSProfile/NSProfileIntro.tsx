import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface IIntroProps {
  nextStep: () => void
}

export default class NSProfileIntro extends React.Component<IIntroProps> {
  constructor(props: IIntroProps) {
    super(props)
  }

  saveAndContinue = (e: any) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return (
      <>
        <Container>
          <Title>
            <h2>NS Profile</h2>
            <h3>눈송 프로필</h3>
          </Title>
          <Description>1. 나만의 눈송이를 만들어보세요</Description>
          <Description>2. 총 여섯가지의 질문에 대한 대답을 선택하여 눈송이인 '나'만의 개성을 표현하는 캐릭터 프로필을 만들어보자!</Description>
          <Description>3. 완성된 프로필을 다운로드받아 카톡 프로필 설정 및 SNS에 올려보기!</Description>
          <NextButton
            onClick={this.saveAndContinue}
          >
            next
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '1rem' }} />
          </NextButton>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 5rem;
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem 2.5rem;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    display: inline;
    font-size: 3.125rem;
    font-weight: 700;
  }

  h3 {
    align-self: center;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1.625rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`

const Description = styled.div`
  font-size: 1.225rem;
  font-weight: 500;
  margin: .25rem 0 0 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1rem;
  }
`

const NextButton = styled.button`
  appearance: none;
  background-color: ${({ theme }) => theme.nsLabWhite};
  border: 0;
  cursor: pointer;
  padding: 0;
  outline: none;
  font-weight: 700;
  font-size: 1.5rem;
  align-items: right;
  padding: 2rem 0 0 0;
`