import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import HeaderRoute from '../HeaderRoute'

import SidePanelRoute from '../SidePanelRoute'

import {MdCancel} from 'react-icons/md'

import {HiFire} from 'react-icons/hi'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  TrendingBackground,
  TrendingContainer,
  TrendingTopContainer,
  ImageContainer,
  ImageElement,
  CancelButton,
  HeadElement,
  ButtonElement,
  TrendingBottomContainer,
  TrendingCard,
  TrendingIcon,
  IconHead,
  VideosTrendingContainer,
  FailureImageElement,
  FailureHead,
  FailurePara,
  FailureButton,
  VideoTrendingItems,
  ThumbnailImage,
  VideoTextContainer,
  VideoHead,
  VideoPara,
  Dot,
  ViewContainer,
} from './styledComponents'

const apiStatusConstants = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class TrendingRoute extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstants.loading,
  }

  componentDidMount() {
    this.fetchTrendingVideosApi()
  }

  fetchTrendingVideosApi = async () => {
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const sendRequest = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    const response = await sendRequest.json()
    if (sendRequest.ok === true) {
      const trendingItems = response.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingList: trendingItems,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryButtonEvent = () => {
    this.setState(
      {apiStatus: apiStatusConstants.loading},
      this.fetchTrendingVideosApi,
    )
  }

  onCallLoadingView = () => {
    return (
      <VideosTrendingContainer outline>
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#616e7c" height="50" width="50" />
        </div>
      </VideosTrendingContainer>
    )
  }

  onCallSuccessView = () => {
    const {trendingList} = this.state
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor} = value
          return (
            <VideosTrendingContainer>
              {trendingList.map(eachItem => (
                <Link to={`/videos/${eachItem.id}`}>
                  <VideoTrendingItems key={eachItem.id}>
                    <ThumbnailImage
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    ></ThumbnailImage>
                    <VideoTextContainer>
                      <VideoHead bgColor={backgroundColor}>
                        {eachItem.title}
                      </VideoHead>
                      <VideoPara>{eachItem.channel.name}</VideoPara>
                      <ViewContainer>
                        <VideoPara>
                          {eachItem.viewCount} views<Dot>.</Dot>
                        </VideoPara>
                        <VideoPara>
                          {formatDistanceToNow(new Date(eachItem.publishedAt))}{' '}
                          ago
                        </VideoPara>
                      </ViewContainer>
                    </VideoTextContainer>
                  </VideoTrendingItems>
                </Link>
              ))}
            </VideosTrendingContainer>
          )
        }}
      </DisplayContext.Consumer>
    )
  }

  onCallFailureView = () => {
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor} = value
          return (
            <VideosTrendingContainer outline>
              <FailureImageElement
                src={
                  backgroundColor
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              ></FailureImageElement>
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
            </VideosTrendingContainer>
          )
        }}
      </DisplayContext.Consumer>
    )
  }

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
              <TrendingBackground>
                <SidePanelRoute />
                <TrendingContainer bgColor={backgroundColor}>
                  {bannerDisplay && (
                    <TrendingTopContainer data-testid="banner">
                      <ImageContainer>
                        <ImageElement
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        ></ImageElement>
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
                    </TrendingTopContainer>
                  )}
                  <TrendingBottomContainer data-testid="trending">
                    <TrendingCard bgColor={backgroundColor}>
                      <TrendingIcon bgColor={backgroundColor}>
                        <HiFire fill="#ff0000" size="30px" />
                      </TrendingIcon>
                      <IconHead bgColor={backgroundColor}>Trending</IconHead>
                    </TrendingCard>
                    {this.apiContantsEvents()}
                  </TrendingBottomContainer>
                </TrendingContainer>
              </TrendingBackground>
            </>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default TrendingRoute
