import styled from 'styled-components'

export const BackgroundContainer = styled.div`
height: 90vh;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const NotfoundContainer = styled.div`
height: 90vh;
width: 80vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const ImageElement = styled.img`
height: 420px;
width: 450px;
margin-bottom: 25px;
`

export const HeadElement = styled.h1`
font-family: "Roboto";
font-size: 30px;
font-weight: 500;
color: ${props => (props.bgColor ? '#ffffff' : '#616e7c')};
line-height: 8px;
`

export const ParaElement = styled.p`
font-family: "Roboto";
font-size: 18px;
font-weight: 400;
color: #616e7c;
`
