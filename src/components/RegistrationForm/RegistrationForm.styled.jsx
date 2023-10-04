import styled, { keyframes } from 'styled-components';
import { Form, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
  animation: ${fadeIn} 0.5s ease;
`;

export const StyledRegisterSection = styled.section`
width: 100%;
max-width: 250px;
min-height: 400px;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 0 2rem;
background-color: rgba(0, 0, 0, 0.4);
animation: ${fadeIn} 0.5s ease;
position: relative;
border-radius: 10px;
box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
&::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  box-shadow: 0 0 1px #03e9f4, 0 0 1px #03e9f4, 0 0 1px #03e9f4, 0 0 1px #03e9f4;
  background-clip: padding-box;
 
  z-index: -1;
}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
  &.valid {
    color: limegreen;
    margin-left: 0.25rem;
  }

  &.invalid {
    color: red;
    margin-left: 0.25rem;
  }
`;

export const StyledField = styled(Field)`
  padding: 5px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 2px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledInstructions = styled.div`
  font-size: 0.50rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  top:0;
  padding: 0.4rem 0.7rem;
  position: relative;
  
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  transition: opacity 0.3s ease;
  text-align: center;

  ${StyledField}:focus + & {
    opacity: 1;
  }

  > svg {
    float: left; 
    margin-right: 0rem;
  }
`;


export const StyledLabel = styled.label`
  font-size: 18px;
  color :white;
  margin-bottom: 10px;
  margin-top: 5px;
  font-weight:500;
`;




export const SignInText = styled.p`
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 400;

`;

