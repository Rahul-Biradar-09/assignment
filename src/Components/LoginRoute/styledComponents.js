import styled from 'styled-components'

export const BackgroundContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => (props.bgColor ? '#313131' : '#f9f9f9')};
`

export const LoginContainer = styled.div`
height: 480px;
width: 460px;
border-radius: 20px; 
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 40px;
box-shadow: ${props => (props.bgColor ? 'none' : '0px 1px 5px 0px #bfbfbf')};
background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const ImageElement = styled.img`
height: 45px;
width: 200px;
`

export const FormContainer = styled.form`
height: 290px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
`

export const LableElement = styled.label`
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: ${props => (props.bgColor ? '#f9f9f9' : '#7e858e')};
margin-bottom: 6px;
`

export const InputElement = styled.input`
font-family: "Roboto";
font-size: 12px;
height: 42px;
width: 100%;
border: 2px solid #cbd5e1;
border-radius: 4px;
outline: none;
padding: 15px;
color: ${props => (props.bgColor ? '#f8fafc' : 'none')};
margin-bottom: ${props => (props.outline ? '20px' : '0px')};
background-color: ${props => (props.bgColor ? 'transparent' : 'none')};
`

export const CheckboxContainer = styled.div`
height: 20px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-top: 13px;
margin-bottom: 20px;
`

export const InputCheckboxElement = styled.input`
height: 17px;
width: 17px;
margin-right: 10px;
`

export const LableCheckboxElement = styled.label`
font-family: "Roboto";
font-size: 2px;
color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
`

export const ButtonElement = styled.button`
font-family: "Roboto";
font-size: 16px;
font-weight: 500;
color: #ffffff;
height: 44px;
width: 100%;
border-radius: 6px;
background-color: #3b82f6;
border: none;
cursor: pointer;
outline: none;
margin-bottom: 10px;
`

export const ErrorMessageElement = styled.p`
font-family: "Roboto";
font-size: 2px;
color: #ff0000;
text-align: center;
`
