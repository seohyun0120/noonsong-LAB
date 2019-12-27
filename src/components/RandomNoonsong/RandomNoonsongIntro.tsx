import React from 'react'
import styled from 'styled-components'

export default function Intro() {
  return (
    <Container>
      <Title>
        <h2>Random Noonsong</h2>
        <h3>나만의 눈송이</h3>
      </Title>
      <Description>닉네임을 입력하고 본인을 표현할 수 있는 이모티콘을 골라보세요 😌</Description>
      <Description>닉네임은 최대 10글자, 닉네임에 따라 눈송이의 색깔이 바뀐답니다!</Description>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 2rem;
  text-align: left;
  width: 100%;
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
      font-size: 24px;
    }

    h3 {
      font-size: 13px;
    }
  }
`

const Description = styled.div`
  font-size: 1.225rem;
  font-weight: 500;
  margin: .25rem 0 0 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
  }
`
