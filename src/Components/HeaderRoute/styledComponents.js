import styled from 'styled-components'

export const HeaderContainer = styled.nav`
height: 10vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${props => (props.bgColor ? '#383838' : '#f9f9f9')};
`

export const ImageButton = styled.button`
margin-left: 25px;
cursor: pointer;
border: none;
background-color: transparent;
list-style-type: none;
`

export const ImageElement = styled.img`
height: 35px;
width: 150px;
`

export const ElementsContainer = styled.ul`
height: 50px;
width: 280px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-right: 40px;
`

export const MoonButton = styled.button`
height: 38px;
width: 38px;
cursor: pointer;
outline: none;
background-color: transparent;
border: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const ProfileImageElement = styled.img`
height: 40px;
width: 40px;
`

export const LogoutButton = styled.button`
height: 40px;
width: 120px;
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: ${props => (props.bgColor ? '#ffffff' : '#3b82f6')};
border: ${props => (props.bgColor ? '2px solid #ffffff' : '2px solid #3b82f6')};
cursor: pointer;
outline: none;
background-color: transparent;
`

export const PopupContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const PopupCard = styled.div`
height: 170px;
width: 350px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
border-radius: 10px;
background-color: #181818;
`

export const HeadElement = styled.p`
font-family: "Roboto";
font-size: 18px;
font-weight: 500;
color: #ffffff;
margin-bottom: 30px;
`

export const AlignContainer = styled(PopupCard)`
height: 40px;
width: 78%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 7px;
`

export const CardButtons = styled.button`
height: 40px;
width: 110px;
font-family: "Roboto";
font-size: 12px;
font-weight: 500;
color: ${props => (props.outline ? '#e2e8f0' : '#ffffff')};
border: none;
cursor: pointer;
outline: none;
border: ${props => (props.outline ? '2px solid #94a3b8' : 'none')};
background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')} ;
`
