import {Component} from 'react'

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import HeaderRoute from '../HeaderRoute'

import SidePanelRoute from '../SidePanelRoute'

import DisplayContext from '../../ContextObject/DisplayContext'

import {MdCancel} from 'react-icons/md'

import {IoIosSearch} from 'react-icons/io'

import {
  HomeBackgroundContainer,
  HomeContainer,
  TopContainer,
  ImageContainer,
  ImageElement,
  CancelButton,
  HeadElement,
  ButtonElement,
  BottomContainer,
  SearchContainer,
  InputElement,
  IconContainer,
  VideosContainer,
  VideoItemContainer,
  FailureImageElement,
  FailureHead,
  FailurePara,
  FailureButton,
  ThumbnailImage,
  VideoBottomContainer,
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

class HomeRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.loading,
    videosList: [],
    searchItem: '',
  }

  componentDidMount() {
    this.fetchVideosApi()
  }

  onCancelBanner = () => {
    this.setState(prevState => ({displayBanner: !prevState.displayBanner}))
  }

  fetchVideosApi = async () => {
    const {searchItem} = this.state
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const fetchDetails = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchItem}`,
      options,
    )
    const response = await fetchDetails.json()
    if (fetchDetails.ok === true) {
      const videoItems = response.videos.map(eachItem => ({
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
        videosList: videoItems,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryButtonEvent = () => {
    this.setState({apiStatus: apiStatusConstants.loading}, this.fetchVideosApi)
  }

  onCallLoadingView = () => (
    <VideosContainer outline>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#616e7c" height="50" width="50" />
      </div>
    </VideosContainer>
  )

  onCallSuccessView = () => {
    const {videosList} = this.state
    let displayVideosItem
    if (videosList.length !== 0) {
      displayVideosItem = true
    }
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor} = value
          return (
            <>
              {displayVideosItem && (
                <VideosContainer>
                  {videosList.map(eachItem => (
                    <Link to={`/videos/${eachItem.id}`} key={eachItem.id}>
                      <VideoItemContainer>
                        <ThumbnailImage
                          src={eachItem.thumbnailUrl}
                          alt="video thumbnail"
                          outline
                        />
                        <VideoBottomContainer>
                          <ThumbnailImage
                            src={eachItem.channel.profileImageUrl}
                            alt="channel logo"
                          />
                          <VideoTextContainer>
                            <VideoHead
                              color={backgroundColor ? 'true' : undefined}
                            >
                              {eachItem.title}
                            </VideoHead>
                            <VideoPara>{eachItem.channel.name}</VideoPara>
                            <ViewContainer>
                              <VideoPara>
                                {eachItem.viewCount} views<Dot>.</Dot>
                              </VideoPara>
                              <VideoPara>
                                {formatDistanceToNow(
                                  new Date(eachItem.publishedAt),
                                )}{' '}
                                ago
                              </VideoPara>
                            </ViewContainer>
                          </VideoTextContainer>
                        </VideoBottomContainer>
                      </VideoItemContainer>
                    </Link>
                  ))}
                </VideosContainer>
              )}
              {!displayVideosItem && (
                <VideosContainer outline>
                  <FailureImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <FailureHead bgColor={backgroundColor}>
                    No Search Results Found
                  </FailureHead>
                  <FailurePara>
                    Try different key words or remove search filter
                  </FailurePara>
                  <FailureButton
                    type="button"
                    onClick={this.onRetryButtonEvent}
                  >
                    Retry
                  </FailureButton>
                </VideosContainer>
              )}
            </>
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
          <VideosContainer outline>
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
          </VideosContainer>
        )
      }}
    </DisplayContext.Consumer>
  )

  onsearchEventListener = event => {
    this.setState({searchItem: event.target.value})
  }

  onsearchIconEvent = () => {
    this.setState({apiStatus: apiStatusConstants.loading}, this.fetchVideosApi)
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
              <HomeBackgroundContainer>
                <SidePanelRoute />
                <HomeContainer bgcolor={backgroundColor} data-testid="home">
                  {bannerDisplay && (
                    <TopContainer data-testid="banner">
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
                    </TopContainer>
                  )}
                  <BottomContainer displayBanner>
                    <SearchContainer>
                      <InputElement
                        type="search"
                        onChange={this.onsearchEventListener}
                        placeholder="Search"
                        bgColor={backgroundColor}
                      />
                      <IconContainer
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onsearchIconEvent}
                        bgColor={backgroundColor}
                      >
                        <IoIosSearch
                          fill={backgroundColor ? '#f1f1f1' : '#f9f9f9'}
                          size="22px"
                        />
                      </IconContainer>
                    </SearchContainer>
                    {this.apiContantsEvents()}
                  </BottomContainer>
                </HomeContainer>
              </HomeBackgroundContainer>
            </>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default HomeRoute
