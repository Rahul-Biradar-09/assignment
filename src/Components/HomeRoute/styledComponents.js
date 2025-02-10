import styled from 'styled-components'

export const HomeBackgroundContainer = styled.div`
height: 90vh;
display: flex;
flex-direction: row;
justify-content: space-betweeen;
`

export const HomeContainer = styled.ul` //div
height: 90vh;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
background-color: ${props => (props.bgcolor ? '#181818' : '#f9f9f9')};
`

export const TopContainer = styled.div`
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

export const HeadElement = styled.p` //changed
width: 350px;
font-family: "Roboto";
font-size: 20px;
font-weight: 400;
color: #616e7c;
line-height: 28px; //changed
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
margin-top: 2px; //changed
`

export const BottomContainer = styled.ul` //div
height: 100%;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 25px;
background-color: transparent;
`

export const SearchContainer = styled.div`
height: 38px;
width: 480px;
outline: none;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: 2.2px solid #616e7c;
`

export const InputElement = styled.input`
height: 100%;
width: 82%;
font-family: "Roboto";
font-size: 16px;
font-weight: 450;
color: #616e7c;
outline: none;
padding: 10px;
border: 0px solid #616e7c;
background-color: ${props => (props.bgColor ? 'transparent' : 'none')};
`

export const IconContainer = styled.button`
height: 100%;
width: 18%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
outline: none;
border-left: 1px solid #616e7c;
border-right: none;
border-top: none;
border-bottom: none;
background-color: ${props => (props.bgColor ? '#909090' : '#cccccc')};
`

export const VideosContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: ${props => (props.outline ? 'column' : 'row')};
justify-content: ${props => (props.outline ? 'center' : 'flex-start')};
align-items: ${props => (props.outline ? 'center' : 'flex-start')};
flex-wrap: ${props => (props.outline ? 'nowrap' : 'wrap')};
margin-top: 25px;
overflow-y: auto;
`

export const VideoItemContainer = styled.li`
height: 310px;
width: 312px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-around;
cursor: pointer;
outline: none;
margin-right: 12px;
margin-bottom: 20px;
list-style-type: none;
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

export const ThumbnailImage = styled.img`
height: ${props => (props.outline ? '150px' : '37px')};
width: ${props => (props.outline ? '312px' : '30px')};
margin-top: ${props => (props.outline ? '0px' : '14px')};
margin-left: ${props => (props.outline ? '0px' : '6px;')};
`

export const VideoBottomContainer = styled.div`
height: 170px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`

export const VideoTextContainer = styled.div`
height: 100%;
width: 85%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
padding-left: 4px;
`

export const VideoHead = styled.p` //h1
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: ${props => (props.color ? '#ffffff' : '#6167c')};
line-height: 22px;
`

export const VideoPara = styled.p`
font-family: "Roboto";
font-size: 2px;
font-weight: 400;
color: #616e7c;
margin-bottom: 10px;
`

export const Dot = styled.span`
font-size: 20px;
fon-weight: bolder;
color: #616e7c;
margin-right: 7px;
margin-left: 7px;
`

export const ViewContainer = styled.div`
height: 30px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
