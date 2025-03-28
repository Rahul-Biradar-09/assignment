import styled from 'styled-components'

export const GamingBackground = styled.div`
height: 90vh;
display: flex;
flex-direction: row;
justify-content: space-betweeen;
`

export const GamingContainer = styled.ul`
height: 90vh;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingTopContainer = styled.div`
height: 240px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding-top: 25px;
padding-left: 25px;
padding-right: 20px;
padding-bottom: 32px;
background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
background-size: cover;
`

export const ImageContainer = styled.div`
height: 40px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
margin-bottom: 7px;
`

export const ImageElement = styled.img`
height: 40px;
width: 170px;
`

export const CancelButton = styled.button`
height: 22px;
width: 22px;
cursor: pointer;
outline: none;
border: none;
background-color: transparent;
`

export const HeadElement = styled.p`
width: 350px;
font-family: "Roboto";
font-size: 20px;
font-weight: 400;
color: #616e7c;
line-height: 28px;
`

export const ButtonElement = styled.button`
height: 40px;
width: 120px;
font-family: "Roboto";
font-size: 16px;
font-weight: 400;
color: #616e7c;
border: 2px solid #616e7c;
background-color: transparent;
margin-top: 2px;
`

export const GamingBottomContainer = styled.ul`
height: 100%;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const GamingCard = styled.div`
height: 125px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
background-color: ${props => (props.bgColor ? '#212121' : '#f1f1f1')};`

export const GamingIcon = styled.div`
height:80px;
width: 80px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
border-radius: 50px;
margin-left: 52px;
margin-right: 20px;
background-color: ${props => (props.bgColor ? '#181818' : '#d7dfe9')};
`

export const IconHead = styled.h1`
font-family: "Roboto";
font-size: 30px;
font-weight: 800;
color: ${props => (props.bgColor ? '#ffffff' : '#181818')};
`

export const VideosGamingContainer = styled.div`
height: 80%;
width: 94%;
display: flex;
flex-direction: ${props => (props.outline ? 'column' : 'row')};
justify-content: ${props => (props.outline ? 'center' : 'flex-start')};
align-items: ${props => (props.outline ? 'center' : 'flex-start')};
flex-wrap: ${props => (props.outline ? 'nowrap' : 'wrap')};
margin-left: 54px;
margin-top: 22px;
overflow-y: auto;
list-style-type: none;
`

export const VideoGamingItems = styled.li`
height: 360px;
width: 220px;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
outline: none;
margin-right: 14px;
margin-bottom: 38px;
list-style-type: none;
`

export const ThumbnailImage = styled.img`
height: 80%;
width: 100%;
`

export const VideoTextContainer = styled.div`
height: 50px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`

export const VideoHead = styled.p`
font-family: "Roboto";
font-size: 18px;
font-weighet: 500;
color:  ${props => (props.bgColor ? '#ffffff' : '#181818')};
line-height: 0px;
`

export const VideoPara = styled.p`
font-family: "Roboto";
font-size: 2px;
font-weight: 450;
color: #616e7c;
`

export const FailureImageElement = styled.img`
height: 300px;
width: 300px;
margin-top: 45px;
margin-bottom: 30px;
`

export const FailureHead = styled.h1`
font-family: "Roboto";
font-size: 30px;
font-weight: 500;
color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
line-height: 7px;
`

export const FailurePara = styled.p`
width: 450px;
font-family: "Roboto";
font-size: 18px;
font-weight: 400;
color: #616e7c;
text-align: center;
line-height: 22px;
`

export const FailureButton = styled.button`
height: 40px;
width: 110px;
font-family: "Roboto";
font-size: 14px;
font-weight: 400;
color: #ffffff;
cursor: pointer;
outline: none;
background-color: #4f46e5;
border: none;
border-radius: 2px;
margin-top: 10px;
margin-bottom: 30px;
`
