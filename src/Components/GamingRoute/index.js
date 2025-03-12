import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {MdCancel} from 'react-icons/md'

import {SiYoutubegaming} from 'react-icons/si'

import HeaderRoute from '../HeaderRoute'

import SidePanelRoute from '../SidePanelRoute'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  GamingBackground,
  GamingContainer,
  GamingTopContainer,
  ImageContainer,
  ImageElement,
  CancelButton,
  HeadElement,
  ButtonElement,
  GamingBottomContainer,
  GamingCard,
  GamingIcon,
  IconHead,
  VideosGamingContainer,
  VideoGamingItems,
  ThumbnailImage,
  VideoTextContainer,
  VideoHead,
  VideoPara,
  FailureImageElement,
  FailureHead,
  FailurePara,
  FailureButton,
} from './styledComponents'

const apiStatusConstants = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class GamingRoute extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.loading,
  }

  componentDidMount() {
    this.fetchGamingVideosApi()
  }

  fetchGamingVideosApi = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const sendRequest = await fetch(
      'https://apis.ccbp.in/videos/gaming',
      options,
    )
    const response = await sendRequest.json()
    if (sendRequest.ok === true) {
      const gamingItems = response.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingList: gamingItems,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryButtonEvent = () => {
    this.setState(
      {apiStatus: apiStatusConstants.loading},
      this.fetchGamingVideosApi,
    )
  }

  onCallLoadingView = () => (
    <VideosGamingContainer outline>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#616e7c" height="50" width="50" />
      </div>
    </VideosGamingContainer>
  )

  onCallSuccessView = () => {
    const {gamingList} = this.state

    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor} = value
          return (
            <VideosGamingContainer>
              {gamingList.map(eachItem => (
                <Link to={`/videos/${eachItem.id}`} key={eachItem.id}>
                  <VideoGamingItems>
                    <ThumbnailImage
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <VideoTextContainer>
                      <VideoHead bgColor={backgroundColor}>
                        {eachItem.title}
                      </VideoHead>
                      <VideoPara>
                        {eachItem.viewCount} Watching Worldwide
                      </VideoPara>
                    </VideoTextContainer>
                  </VideoGamingItems>
                </Link>
              ))}
            </VideosGamingContainer>
          )
        }}
      </DisplayContext.Consumer>
    )
  }

  onCallFailureView = () => (
    <DisplayContext.Consumer>
      {value => {
        const {backgroundColor} = value
        return (
          <VideosGamingContainer outline>
            <FailureImageElement
              src={
                backgroundColor
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHead bgColor={backgroundColor}>
              Oops! Something Went Wrong
            </FailureHead>
            <FailurePara>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <FailureButton type="button" onClick={this.onRetryButtonEvent}>
              Retry
            </FailureButton>
          </VideosGamingContainer>
        )
      }}
    </DisplayContext.Consumer>
  )

  apiContantsEvents = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.onCallLoadingView()
      case apiStatusConstants.success:
        return this.onCallSuccessView()
      case apiStatusConstants.failure:
        return this.onCallFailureView()
    }
  }

  render() {
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor, bannerDisplay, changeBannerDisplay} = value
          const onCancelBanner = () => {
            changeBannerDisplay()
          }
          return (
            <>
              <HeaderRoute />
              <GamingBackground>
                <SidePanelRoute />
                <GamingContainer bgColor={backgroundColor}>
                  {bannerDisplay && (
                    <GamingTopContainer data-testid="banner">
                      <ImageContainer>
                        <ImageElement
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CancelButton
                          type="button"
                          data-testid="close"
                          onClick={onCancelBanner}
                        >
                          <MdCancel size="24px" fill="#616e7c" />
                        </CancelButton>
                      </ImageContainer>
                      <HeadElement>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </HeadElement>
                      <ButtonElement type="button" data-testid="theme">
                        GET IT NOW
                      </ButtonElement>
                    </GamingTopContainer>
                  )}
                  <GamingBottomContainer data-testid="gaming">
                    <GamingCard bgColor={backgroundColor}>
                      <GamingIcon bgColor={backgroundColor}>
                        <SiYoutubegaming fill="#ff0000" size="30px" />
                      </GamingIcon>
                      <IconHead bgColor={backgroundColor}>Gaming</IconHead>
                    </GamingCard>
                    {this.apiContantsEvents()}
                  </GamingBottomContainer>
                </GamingContainer>
              </GamingBackground>
            </>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default GamingRoute
