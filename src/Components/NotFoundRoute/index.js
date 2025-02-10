import HeaderRoute from '../HeaderRoute'

import SidePanelRoute from '../SidePanelRoute'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  BackgroundContainer,
  NotfoundContainer,
  ImageElement,
  HeadElement,
  ParaElement,
} from './styledComponents'

const NotFoundRoute = () => {
  return (
    <DisplayContext.Consumer>
      {value => {
        const {backgroundColor} = value
        return (
          <>
            <HeaderRoute />
            <BackgroundContainer>
              <SidePanelRoute />
              <NotfoundContainer bgColor={backgroundColor}>
                <ImageElement
                  src={
                    backgroundColor
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                ></ImageElement>
                <HeadElement bgColor={backgroundColor}>
                  Page Not Found
                </HeadElement>
                <ParaElement>
                  We are sorry, the page you requested could not be found.
                </ParaElement>
              </NotfoundContainer>
            </BackgroundContainer>
          </>
        )
      }}
    </DisplayContext.Consumer>
  )
}

export default NotFoundRoute
