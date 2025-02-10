import styled from 'styled-components'

export const VideoItemBackground = styled.div`
height: 90vh;
display: flex;
flex-direction: row;
justify-content: space-betweeen;
`

export const VideoItemContainer = styled.ul`
height: 90vh;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoItemTopContainer = styled.div`
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

export const VideoItemBottomContainer = styled.ul`
height: 100%;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const VideoDetailsContainer = styled.div`
height: 900px;
width: 90%;
display: flex;
flex-direction: column;
justify-content: ${props => (props.outline ? 'center' : 'flex-start')};
align-items: center;
margin-top: 20px;
ouverflow-y: auto;
`

export const VideoItemDetailsContainer = styled.div`
height: 610px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
outline: none;
`

export const ThumbnailImage = styled.div`
height: 500px;
width: 100%;
`

export const VideoTextContainer = styled.div`
height: 95px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin-top: 15px;
`

export const VideoHead = styled.p`
font-family: "Roboto";
font-size: 20px;
font-weight: 450;
color: ${props => (props.bgColor ? '#ffffff' : '#181818')};
line-height: 10px;
`

export const VideoPara = styled.p`
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: #616e7c;
line-height: 2px;
`

export const LikesPara = styled.p`
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
line-height: 0px;
`

export const DisLikesPara = styled.p`
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
line-height: 0px;
`

export const SavePara = styled.button`
height: 100%;
width: 68px;
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
cursor: pointer;
border: none;
background-color: transparent;
`

export const Dot = styled.span`
font-size: 20px;
fon-weight: bolder;
color: #616e7c;
margin-right: 7px;
margin-left: 7px;
`

export const AlignContainer = styled.div`
height: 40px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ViewContainer = styled.div`
height: 30px;
width: 350px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`

export const LikesContainer = styled.div`
height: 30px;
width: 262px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

export const SubContainer1 = styled.button`
height: 30px;
width: 68px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
cursor: pointer;
outline: none;
border: none;
background-color: transparent;
`

export const SubContainer2 = styled.button`
height: 30px;
width: 90px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
cursor: pointer;
outline: none;
border: none;
background-color: transparent;
`

export const SubContainer3 = styled.div`
height: 30px;
width: 90px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
cursor: pointer;
outline: none;
border: none;
background-color: transparent;
`

export const Line = styled.hr`
height: 2px;
width: 100%;
background-color: #616e7c;`

export const DescriptionContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
margin-top: 18px;
margin-bottom: 20px;
`

export const ItemImage = styled.img`
height: 45px;
width: 45px;
margin-top: 12px;
`
export const ItemTextContainer = styled.div`
height: 100%;
width: 93%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

export const BottomHead = styled.p`
font-family: "Roboto";
font-size: 17px;
font-weight: 450;
color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
line-height: 25px;`

export const BottomPara = styled.p`
font-family: "Roboto";
font-size: 2px;
font-weight: 450;
color: #616e7c;
margin-bottom: 32px;`

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
