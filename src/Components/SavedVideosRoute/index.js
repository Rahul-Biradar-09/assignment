import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import {MdCancel} from 'react-icons/md'

import {HiSaveAs} from 'react-icons/hi'

import HeaderRoute from '../HeaderRoute'

import SidePanelRoute from '../SidePanelRoute'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  SavedVideosBackground,
  SavedVideosContainer,
  SavedVideosTopContainer,
  ImageContainer,
  ImageElement,
  CancelButton,
  HeadElement,
  ButtonElement,
  SavedVideosBottomContainer,
  SavedVideosCard,
  SavedIcon,
  IconHead,
  VideosSavedContainer,
  VideoSavedItems,
  ThumbnailImage,
  VideoTextContainer,
  VideoHead,
  VideoPara,
  Dot,
  ViewContainer,
  FailureImageElement,
  FailureHead,
  FailurePara,
} from './styledComponents'

const apiStatusConstants = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class SavedVideosRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.loading,
  }

  componentDidMount() {
    this.setState({apiStatus: apiStatusConstants.success})
  }

  onCallLoadingView = () => {
    return (
      <VideosSavedContainer outline>
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#616e7c" height="50" width="50" />
        </div>
      </VideosSavedContainer>
    )
  }

  onCallSuccessView = () => {
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor, videoItems} = value
          return (
            <VideosSavedContainer>
              {videoItems.map(eachItem => (
                <Link to={`/videos/${eachItem.id}`}>
                  <VideoSavedItems key={eachItem.id}>
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
                  </VideoSavedItems>
                </Link>
              ))}
            </VideosSavedContainer>
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
            <VideosSavedContainer outline>
              <FailureImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              ></FailureImageElement>
              <FailureHead bgColor={backgroundColor}>
                No saved videos found
              </FailureHead>
              <FailurePara>
                You can save your videos while watching them
              </FailurePara>
            </VideosSavedContainer>
          )
        }}
      </DisplayContext.Consumer>
    )
  }

  render() {
    return (
      <DisplayContext.Consumer>
        {value => {
          const {
            backgroundColor,
            bannerDisplay,
            changeBannerDisplay,
            videoItems,
          } = value
          const onCancelBanner = () => {
            changeBannerDisplay()
          }
          return (
            <>
              <HeaderRoute />
              <SavedVideosBackground>
                <SidePanelRoute />
                <SavedVideosContainer bgColor={backgroundColor}>
                  {bannerDisplay && (
                    <SavedVideosTopContainer data-testid="banner">
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
                    </SavedVideosTopContainer>
                  )}
                  <SavedVideosBottomContainer data-testid="savedVideos">
                    {videoItems.length !== 0 ? (
                      <SavedVideosCard bgColor={backgroundColor}>
                        <SavedIcon bgColor={backgroundColor}>
                          <HiSaveAs fill="#ff0000" size="30px" />
                        </SavedIcon>
                        <IconHead bgColor={backgroundColor}>
                          Saved Videos
                        </IconHead>
                      </SavedVideosCard>
                    ) : (
                      () => {}
                    )}
                    {videoItems.length !== 0
                      ? this.onCallSuccessView()
                      : this.onCallFailureView()}
                  </SavedVideosBottomContainer>
                </SavedVideosContainer>
              </SavedVideosBackground>
            </>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default SavedVideosRoute
