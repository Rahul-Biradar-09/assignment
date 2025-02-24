import styled from 'styled-components'

export const SideContainer = styled.div`
height: 90vh;
width: 20vw;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${props => (props.bgColor ? '#424242' : '#ffffff')};
`

export const TopContainer = styled.div`
height: 180px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
outline: none;
list-style-type: none;
`

export const ElementsContainer = styled.li`
height: 40px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
list-style-type: none;
text-decoration: none;
background-color: ${props => (props.bgColor ? '#f1f5f9' : '#ffffff')};
`

export const ElementsContainer1 = styled.li`
height: 40px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
list-style-type: none;
text-decoration: none;
background-color: ${props => (props.bgColor ? '#909090' : undefined)};
`

export const ImageContainer = styled.div`
height: 20px;
width: 20px;
color: ${props => (props.color ? '#ff0000' : '#616e7c')};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 13px;
margin-right: 15px;
`

export const ImageContainer1 = styled.div`
height: 20px;
width: 20px;
color: ${props => (props.color ? '#ff0000' : '#cccccc')};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 13px;
margin-right: 15px;
`

export const HeadElement = styled.h1`
font-family: "Roboto";
font-size: 16px;
font-weight: 400;
color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
`

export const BottomContainer = styled.div`
height: 220px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding-left: 18px;
`

export const HeadBottom = styled.p`
font-family: "Roboto";
font-size: 18px;
font-weight: bolder;
color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
`

export const ImageBottomContainer = styled.div`
height: 40px;
width: 140px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 12px;
margin-bottom: 8px;
list-style-type: none;
`

export const ImageElement = styled.img`
height: 36px;
width: 36px;
`

export const ParaBottom = styled.p`
font-family: "Roboto";
font-size: 17px;
font-weight: 500;
color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
`
