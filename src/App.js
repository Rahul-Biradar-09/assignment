import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import LoginRoute from './Components/LoginRoute'

import HomeRoute from './Components/HomeRoute'

import TrendingRoute from './Components/TrendingRoute'

import GamingRoute from './Components/GamingRoute'

import SavedVidoesRoute from './Components/SavedVideosRoute'

import VideoItemDetailsRoute from './Components/VideoItemDetailsRoute'

import NotFoundRoute from './Components/NotFoundRoute'

import ProtectedRoute from './Components/ProtectedRoute'

import DisplayContext from './ContextObject/DisplayContext'

import './App.css'

class App extends Component {
  state = {backgroundColor: false, bannerDisplay: true, videoItems: []}

  changeBgColor = () => {
    this.setState(prevState => ({backgroundColor: !prevState.backgroundColor}))
  }

  changeBannerDisplay = () => {
    this.setState(prevState => ({bannerDisplay: !prevState.bannerDisplay}))
  }

  addItems = details => {
    this.setState(prevState => ({
      videoItems: [...prevState.videoItems, details],
    }))
  }

  render() {
    const {backgroundColor, bannerDisplay, videoItems} = this.state
    return (
      <DisplayContext.Provider
        value={{
          videoItems,
          backgroundColor,
          bannerDisplay,
          changeBgColor: this.changeBgColor,
          changeBannerDisplay: this.changeBannerDisplay,
          addItems: this.addItems,
        }}
      >
        <Switch>
          <Route exact path='/login' component={LoginRoute} />
          <ProtectedRoute exact path='/' component={HomeRoute} />
          <ProtectedRoute exact path='/trending' component={TrendingRoute} />
          <ProtectedRoute exact path='/gaming' component={GamingRoute} />
          <ProtectedRoute
            exact
            path='/saved-videos'
            component={SavedVidoesRoute}
          />
          <ProtectedRoute
            exact
            path='/videos/:id'
            component={VideoItemDetailsRoute}
          />
          <Route path='/not-found' component={NotFoundRoute} />
          <Redirect to='not-found' />
        </Switch>
      </DisplayContext.Provider>
    )
  }
}

export default App
