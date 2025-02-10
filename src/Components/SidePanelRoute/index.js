import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {HiSaveAs} from 'react-icons/hi'

import {v4 as uuidv4} from 'uuid'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  SideContainer,
  TopContainer,
  ElementsContainer,
  ElementsContainer1,
  ImageContainer,
  ImageContainer1,
  HeadElement,
  BottomContainer,
  HeadBottom,
  ImageBottomContainer,
  ImageElement,
  ParaBottom,
} from './styledComponents'

const sidePanelNames = [
  {
    id: uuidv4(),
    name: 'Home',
    route: '/',
    icon: <AiFillHome size="17px" />,
  },
  {
    id: uuidv4(),
    name: 'Trending',
    route: '/trending',
    icon: <HiFire size="17px" />,
  },
  {
    id: uuidv4(),
    name: 'Gaming',
    route: '/gaming',
    icon: <SiYoutubegaming size="17px" />,
  },
  {
    id: uuidv4(),
    name: 'Saved Videos',
    route: '/saved-videos',
    icon: <HiSaveAs size="17px" />,
  },
]

class SidePanelRoute extends Component {
  state = {route_id: ''}

  onChangeRoute = id => {
    this.setState({route_id: id})
  }

  render() {
    const {route_id} = this.state
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor} = value
          return (
            <SideContainer bgColor={backgroundColor}>
              <TopContainer>
                {sidePanelNames.map(eachItem => (
                  <Link
                    to={eachItem.route}
                    onClick={() => this.onChangeRoute(eachItem.id)}
                  >
                    {backgroundColor ? (
                      <ElementsContainer1
                        key={eachItem.id}
                        bgColor={route_id === eachItem.id}
                      >
                        <ImageContainer1
                          color={route_id === eachItem.id ? 'true' : undefined}
                        >
                          {eachItem.icon}
                        </ImageContainer1>
                        <HeadElement bgColor={backgroundColor}>
                          {eachItem.name}
                        </HeadElement>
                      </ElementsContainer1>
                    ) : (
                      <ElementsContainer
                        key={eachItem.id}
                        bgColor={route_id === eachItem.id}
                      >
                        <ImageContainer
                          color={route_id === eachItem.id ? 'true' : undefined}
                        >
                          {eachItem.icon}
                        </ImageContainer>
                        <HeadElement bgColor={backgroundColor}>
                          {eachItem.name}
                        </HeadElement>
                      </ElementsContainer>
                    )}
                  </Link>
                ))}
              </TopContainer>
              <BottomContainer>
                <HeadBottom bgColor={backgroundColor}>CONTACT US</HeadBottom>
                <ImageBottomContainer>
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  ></ImageElement>
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  ></ImageElement>
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  ></ImageElement>
                </ImageBottomContainer>
                <ParaBottom bgColor={backgroundColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ParaBottom>
              </BottomContainer>
            </SideContainer>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default SidePanelRoute
