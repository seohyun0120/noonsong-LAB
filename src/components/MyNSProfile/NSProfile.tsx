import React from 'react'
import styled from 'styled-components'
import NSProfileForm from './NSProfileForm'

export default function NSProfile() {
  return (
    <Container>
      <NSProfileForm />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`