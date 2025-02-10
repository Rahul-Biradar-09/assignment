import React from 'react'

const DisplayContext = React.createContext({
  videoItems: [],
  backgroundColor: false,
  bannerDisplay: true,
  changeBgColor: () => {},
  changeBannerDisplay: () => {},
  addItems: () => {},
})

export default DisplayContext
