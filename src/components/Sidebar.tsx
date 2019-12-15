import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Sidebar extends React.Component {
  render() {
    return (
      <>
        <SidebarContainer>
          <SidebarTop>
            <SidebarTopRight>
              <FontAwesomeIcon icon={faTimes} color='white' />
            </SidebarTopRight>
          </SidebarTop>
          <SidebarMenu>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Menu>랜덤눈송이</Menu>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Menu>About</Menu>
            </Link>
          </SidebarMenu>
        </SidebarContainer>
      </>
    )
  }
}

const SidebarContainer = styled.div`
  box-shadow: 0.25rem 0 1rem 0 rgba(0,0,0,.3);
  transform: translateX(0);
  background-color: #000;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 10rem;
  transition: transform .5s,box-shadow .5s .5s,-webkit-transform .5s;
  z-index: 102;
`

const SidebarTop = styled.div`
  background-color: #000;
  position: relative;
  height: 2rem;
`

const SidebarTopRight = styled.div`
  position: absolute;
  top: 50%;
  left: 85%;
  right: .25rem;
  line-height: 1;
  transform: translateY(-50%);
`

const SidebarMenu = styled.div`
  padding: 1rem 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: color .5s;
  transform-origin: 0 0;
  transition: transform .5s,-webkit-transform .5s;
  overflow: hidden;
`

const Menu = styled.div`
  color: white;
  margin-bottom: .625rem;
`
