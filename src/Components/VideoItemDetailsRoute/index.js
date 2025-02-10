import {Component} from 'react'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import {MdCancel} from 'react-icons/md'

import {BiLike} from 'react-icons/bi'

import {BiDislike} from 'react-icons/bi'

import {HiSaveAs} from 'react-icons/hi'

import HeaderRoute from '../HeaderRoute'

import SidePanelRoute from '../SidePanelRoute'

import DisplayContext from '../../ContextObject/DisplayContext'

import {
  VideoItemBackground,
  VideoItemContainer,
  VideoItemTopContainer,
  ImageContainer,
  ImageElement,
  CancelButton,
  HeadElement,
  ButtonElement,
  VideoItemBottomContainer,
  VideoDetailsContainer,
  VideoItemDetailsContainer,
  ThumbnailImage,
  VideoTextContainer,
  VideoHead,
  VideoPara,
  LikesPara,
  DisLikesPara,
  SavePara,
  Dot,
  AlignContainer,
  ViewContainer,
  LikesContainer,
  SubContainer1,
  SubContainer2,
  SubContainer3,
  Line,
  DescriptionContainer,
  ItemImage,
  ItemTextContainer,
  BottomHead,
  BottomPara,
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

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.loading,
    videoItemDetails: [],
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.fetchVideoDetailsItemApi()
  }

  fetchVideoDetailsItemApi = async () => {
    const jwtToken = Cookies.get('jwtToken')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const request = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const response = await request.json()
    if (request.ok === true) {
      const itemDetails = {
        id: response.video_details.id,
        channel: {
          name: response.video_details.channel.name,
          profileImageUrl: response.video_details.channel.profile_image_url,
          subscriberCount: response.video_details.channel.subscriber_count,
        },
        description: response.video_details.description,
        thumbnailUrl: response.video_details.thumbnail_url,
        title: response.video_details.title,
        videoUrl: response.video_details.video_url,
        publishedAt: response.video_details.published_at,
        viewCount: response.video_details.view_count,
        isSaved: false,
        isLiked: false,
      }
      this.setState({
        videoItemDetails: itemDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryButtonEvent = () => {
    this.setState({apiStatus: apiStatusConstants.loading})
  }

  onCallLoadingView = () => {
    return (
      <VideoDetailsContainer outline>
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#616e7c" height="50" width="50" />
        </div>
      </VideoDetailsContainer>
    )
  }

  onLikedEvent = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onDislikedEvent = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onSaveEvent = () => {
    /*this.setState(prevState => ({videoItemDetails: prevState.videoItemDetails.map(eachItem => {
      if (id === eachItem.id){
        return {...eachItem, isSaved: !eachItem.isSaved}
      }
      return eachItem
    })})) */ 
  // I tried to update the key of the videoItem but got error called :- (videosItemDetails.map not a function)
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onCallSuccessView = () => {
    const {videoItemDetails, isLiked, isDisliked, isSaved} = this.state
    const {id, title, videoUrl, channel, description, publishedAt, viewCount} =
      videoItemDetails
    const {thumbnailUrl} = videoItemDetails
    return (
      <DisplayContext.Consumer>
        {value => {
          const {backgroundColor, addItems} = value
          const onaddItems = () => {
            addItems({...videoItemDetails, thumbnailUrl})
          }
          return (
            <VideoDetailsContainer>
              <VideoItemDetailsContainer key={id}>
                <ThumbnailImage>
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    height="500px"
                    width="100%"
                  />
                </ThumbnailImage>
                <VideoTextContainer>
                  <VideoHead bgColor={backgroundColor}>{title}</VideoHead>
                  <AlignContainer>
                    <ViewContainer>
                      <VideoPara>
                        {viewCount} views . {''}
                      </VideoPara>
                      <VideoPara>
                        {formatDistanceToNow(new Date(publishedAt))} ago
                      </VideoPara>
                    </ViewContainer>
                    <LikesContainer>
                      <SubContainer1 type="button" onClick={this.onLikedEvent}>
                        <BiLike
                          fill={isLiked ? '#2563eb' : '#64748b'}
                          size="20px"
                        />
                        <LikesPara isLiked={isLiked}>Like</LikesPara>
                      </SubContainer1>
                      <SubContainer2
                        type="button"
                        onClick={this.onDislikedEvent}
                      >
                        <BiDislike
                          fill={isDisliked ? '#2563eb' : '#64748b'}
                          size="20px"
                        />
                        <DisLikesPara isDisliked={isDisliked}>
                          DisLike
                        </DisLikesPara>
                      </SubContainer2>
                      <SubContainer3 type="button" onClick={onaddItems}>
                        <HiSaveAs
                          fill={isSaved ? '#2563eb' : '#64748b'}
                          size="20px"
                        />
                        <SavePara
                          isSaved={isSaved}
                          onClick={() => this.onSaveEvent(id)}
                        >
                          {isSaved ? 'Saved' : 'Save'}
                        </SavePara>
                      </SubContainer3>
                    </LikesContainer>
                  </AlignContainer>
                </VideoTextContainer>
              </VideoItemDetailsContainer>
              <Line></Line>
              <DescriptionContainer>
                <ItemImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                ></ItemImage>
                <ItemTextContainer>
                  <BottomHead bgColor={backgroundColor}>
                    {channel.name}
                  </BottomHead>
                  <BottomPara>{channel.subscriberCount} subscribers</BottomPara>
                  <BottomHead bgColor={backgroundColor}>
                    {description}
                  </BottomHead>
                </ItemTextContainer>
              </DescriptionContainer>
            </VideoDetailsContainer>
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
            <VideoDetailsContainer outline>
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
            </VideoDetailsContainer>
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
              <VideoItemBackground>
                <SidePanelRoute />
                <VideoItemContainer bgColor={backgroundColor}>
                  {bannerDisplay && (
                    <VideoItemTopContainer data-testid="banner">
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
                    </VideoItemTopContainer>
                  )}
                  <VideoItemBottomContainer data-testid="videoItemDetails">
                    {this.apiContantsEvents()}
                  </VideoItemBottomContainer>
                </VideoItemContainer>
              </VideoItemBackground>
            </>
          )
        }}
      </DisplayContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
