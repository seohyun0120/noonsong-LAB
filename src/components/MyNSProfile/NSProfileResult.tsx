import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ButtonContainer, BackButton } from './style'
import face1 from '../../assets/svg/ns_face_happy.svg'
import face2 from '../../assets/svg/ns_face_x.svg'
import face3 from '../../assets/svg/ns_face_tired.svg'
import face4 from '../../assets/svg/ns_face_smile.svg'
import cloth1 from '../../assets/svg/ns_cloth_hoodie_skyblue.svg'
import cloth2 from '../../assets/svg/ns_cloth_hoodie_green.svg'
import cloth3 from '../../assets/svg/ns_cloth_hoodie_red.svg'
import cloth4 from '../../assets/svg/ns_cloth_tshirt_skyblue.svg'
import cloth5 from '../../assets/svg/ns_cloth_tshirt_green.svg'
import cloth6 from '../../assets/svg/ns_cloth_tshirt_red.svg'
import drink1 from '../../assets/svg/ns_drink_tejeva.svg'
import drink2 from '../../assets/svg/ns_drink_madona.svg'
import drink3 from '../../assets/svg/ns_drink_rosecoffee.svg'
import drink4 from '../../assets/svg/ns_drink_bonsol.svg'
import drink5 from '../../assets/svg/ns_drink_merci.svg'
import drink6 from '../../assets/svg/ns_drink_starbucks.svg'
import device1 from '../../assets/svg/ns_device_laptop.svg'
import device2 from '../../assets/svg/ns_device_keyboard.svg'
import nametag from '../../assets/svg/ns_nametag.svg'
import labTitle from '../../assets/svg/ns_lab_title.svg'
import text1 from '../../assets/svg/ns_text_200.svg'
import text2 from '../../assets/svg/ns_text_404.svg'
import text3 from '../../assets/svg/ns_text_null.svg'

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

class Cloth1 extends React.Component {
  render() {
    return <Cloth src={cloth1} />
  }
}

class Cloth2 extends React.Component {
  render() {
    return <Cloth src={cloth2} />
  }
}

class Cloth3 extends React.Component {
  render() {
    return <Cloth src={cloth3} />
  }
}

class Cloth4 extends React.Component {
  render() {
    return <Cloth src={cloth4} />
  }
}

class Cloth5 extends React.Component {
  render() {
    return <Cloth src={cloth5} />
  }
}

class Cloth6 extends React.Component {
  render() {
    return <Cloth src={cloth6} />
  }
}

export class NSProfileResult extends React.Component<IResult> {
  constructor(props: IResult) {
    super(props)
  }

  back = (e: any) => {
    e.preventDefault()
    this.props.prevStep()
  }

  randomize(arr: any) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  render() {
    const arr = [<Cloth1 />, <Cloth2 />, <Cloth3 />, <Cloth4 />, <Cloth5 />, <Cloth6 />]
    return (
      <>
        <Container>
          <BottomBackground></BottomBackground>
          {/* <TopBackground></TopBackground> */}
          <g id='name_tag'>
            <Nametag src={nametag} />
          </g>
          {/* <Name length={this.props.values.nickname.length}>{this.props.values.nickname}</Name>
          <NSLabTitle src={labTitle} />
          <BubbleText src={text1} />
          <>{this.randomize(arr)}</>
          {(() => {
            switch (this.props.values.function3) {
              case 1:
                return <Face src={face1} />
              case 2:
                return <Face src={face2} />
              case 3:
                return <Face src={face3} />
              case 4:
                return <Face src={face4} />
            }
          })()}
          {(() => {
            switch (this.props.values.function4) {
              case 1:
                return <Device src={device1} />
              case 2:
                return <Device src={device2} />
            }
          })()}
          {(() => {
            switch (this.props.values.function2) {
              case 1:
                return <Drink src={drink1} />
              case 2:
                return <Drink src={drink2} />
              case 3:
                return <Drink src={drink3} />
              case 4:
                return <Drink src={drink4} />
              case 5:
                return <Drink src={drink5} />
              case 6:
                return <Drink src={drink6} />
            }
          })()} */}
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

const NSLabTitle = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`

const BubbleText = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`

const BottomBackground = styled.div`
  position: absolute;
  width: 50rem;
  height: 50rem;
  background: ${({ theme }) => theme.nsLabRed};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
    height: 20rem;
  }
`

const TopBackground = styled.div`
  position: absolute;
  width: 50rem;
  height: 35rem;
  background: ${({ theme }) => theme.nsLabYellow};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
    height: 14rem;
  }
`

const Nametag = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`
interface IStringProps {
  length: number;
}

const Name = styled.div<IStringProps>`
  position: fixed;
  top: 49.6rem;
  left: ${(props) => 56 - (props.length) * 0.45}rem;
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 22.35rem;
    left: ${(props) => 19 - (props.length) * 0.2}rem;
    font-size: 0.8rem;
  }
`

const Face = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`

const Cloth = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`

const Drink = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`

const Device = styled.img`
  position: absolute;
  width: 50rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
  }
`

export default NSProfileResult;