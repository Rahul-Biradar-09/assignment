import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import Cookies from 'js-cookie'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  BackgroundContainer,
  LoginContainer,
  ImageElement,
  FormContainer,
  LableElement,
  InputElement,
  CheckboxContainer,
  InputCheckboxElement,
  LableCheckboxElement,
  ButtonElement,
  ErrorMessageElement,
} from './styledComponents'

class LoginRoute extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  saveJwtToken = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  loginApiCall = async () => {
    const {username, password} = this.state
    const details = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const fetchRequest = await fetch('https://apis.ccbp.in/login', options)
    const response = await fetchRequest.json()
    if (fetchRequest.ok === true) {
      this.saveJwtToken(response.jwt_token)
    } else {
      this.setState({errorMsg: response.error_msg})
    }
  }

  formEventListener = event => {
    event.preventDefault()
    this.loginApiCall()
  }

  inputEventUsername = event => {
    this.setState({username: event.target.value})
  }

  inputEventPassword = event => {
    this.setState({password: event.target.value})
  }

  inputEventCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor} = value
          return (
            <BackgroundContainer bgColor={backgroundColor}>
              <LoginContainer bgColor={backgroundColor}>
                <ImageElement
                  src={
                    backgroundColor
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.formEventListener}>
                  <LableElement htmlFor="label-one" bgColor={backgroundColor}>
                    USERNAME
                  </LableElement>
                  <InputElement
                    type="text"
                    id="label-one"
                    placeholder="Username"
                    onChange={this.inputEventUsername}
                    value={username}
                    outline
                    bgColor={backgroundColor}
                  />
                  <LableElement htmlFor="label-two" bgColor={backgroundColor}>
                    PASSWORD
                  </LableElement>
                  <InputElement
                    type={showPassword ? 'text' : 'password'}
                    id="label-two"
                    placeholder="Password"
                    onChange={this.inputEventPassword}
                    value={password}
                    bgColor={backgroundColor}
                  />
                  <CheckboxContainer>
                    <InputCheckboxElement
                      type="checkbox"
                      id="checkbox-one"
                      onChange={this.inputEventCheckbox}
                    />
                    <LableCheckboxElement
                      htmlFor="checkbox-one"
                      bgColor={backgroundColor}
                    >
                      Show Password
                    </LableCheckboxElement>
                  </CheckboxContainer>
                  <ButtonElement type="submit">Login</ButtonElement>
                  <ErrorMessageElement>{errorMsg}</ErrorMessageElement>
                </FormContainer>
              </LoginContainer>
            </BackgroundContainer>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default LoginRoute
