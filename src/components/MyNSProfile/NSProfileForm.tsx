import React from 'react'
import Question1 from './NSProfileFunction1'
import Question2 from './NSProfileFunction2'
import Question3 from './NSProfileFunction3'
import Question4 from './NSProfileFunction4'
import Question5 from './NSProfileFunction5'
import NSProfileIntro from './NSProfileIntro'
import NSProfileResult from './NSProfileResult'

interface IFormState {
  step: number
  nickname: string
  function2: number
  function3: number
  function4: number
  function5: number
}

export class NSProfileForm extends React.Component<{}, IFormState> {
  state: IFormState = {
    step: 0,
    nickname: '',
    function2: 0,
    function3: 0,
    function4: 0,
    function5: 0,
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  saveCheckbox = (i: number) => {
    const { step } = this.state
    switch (step) {
      case 2: this.setState({ function2: i })
      case 3: this.setState({ function3: i })
      case 4: this.setState({ function4: i })
      case 5: this.setState({ function5: i })
    }
  }
  onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nickname: e.target.value })
  }

  render() {
    console.log(this.state.nickname, this.state.function2)
    const { step } = this.state
    const values = this.state
    switch (step) {
      case 0:
        return (<NSProfileIntro nextStep={this.nextStep} />)
      case 1:
        return (
          <Question1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.onNicknameChange}
            values={values}
          />
        )
      case 2:
        return (
          <Question2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.saveCheckbox}
            values={values}
          />
        )
      case 3:
        return (
          <Question3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.saveCheckbox}
            values={values}
          />
        )
      case 4:
        return (
          <Question4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.saveCheckbox}
            values={values}
          />
        )
      case 5:
        return (
          <Question5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.saveCheckbox}
            values={values}
          />
        )
      case 6:
        return (
          <NSProfileResult
            prevStep={this.prevStep}
            values={values}
          />
        )
      default:
        return (<NSProfileIntro nextStep={this.nextStep} />)
    }
  }
}

export default NSProfileForm;