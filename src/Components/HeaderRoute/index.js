import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import {ImSun} from 'react-icons/im'

import Popup from 'reactjs-popup'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  HeaderContainer,
  ImageButton,
  ImageElement,
  ElementsContainer,
  MoonButton,
  ProfileImageElement,
  LogoutButton,
  PopupContainer,
  PopupCard,
  HeadElement,
  AlignContainer,
  CardButtons,
} from './styledComponents'

const HeaderRoute = props => {
  const onlogoutButton = () => {
    const {history} = props
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  return (
    <DisplayContext.Consumer>
      {value => {
        const {backgroundColor, changeBgColor} = value
        const onChangeIcon = () => {
          changeBgColor()
        }

        return (
          <HeaderContainer bgColor={backgroundColor}>
            <ImageButton>
              <Link to="/">
                <ImageElement
                  src={
                    backgroundColor
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
            </ImageButton>
            <ElementsContainer>
              <MoonButton type="button" onClick={onChangeIcon}>
                {backgroundColor ? (
                  <ImSun fill="#ffffff" size="30px" />
                ) : (
                  <FaMoon fill="#0f0f0f" size="30px" />
                )}
              </MoonButton>
              <ProfileImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <PopupContainer>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" bgColor={backgroundColor}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {logout => (
                    <PopupCard>
                      <HeadElement>
                        Are you sure, you want to logout?
                      </HeadElement>
                      <AlignContainer>
                        <CardButtons
                          type="button"
                          onClick={() => logout()}
                          outline
                        >
                          Cancel
                        </CardButtons>
                        <CardButtons type="button" onClick={onlogoutButton}>
                          Confirm
                        </CardButtons>
                      </AlignContainer>
                    </PopupCard>
                  )}
                </Popup>
              </PopupContainer>
            </ElementsContainer>
          </HeaderContainer>
        )
      }}
    </DisplayContext.Consumer>
  )
}

export default withRouter(HeaderRoute)
