import styled, { keyframes } from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0);
  }
`;

export const StyledForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease;
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  Font-size: 18px;
  margin-bottom: 10px;
  animation: ${slideIn} 0.5s ease;
`;



export const StyledInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledInputMask = styled(InputMask)`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 13px;
  
  animation: ${fadeIn} 0.5s ease;
`;

export const StyledSubmitButton = styled.button`
  display: block;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #007bff; 
  }

  animation: ${fadeIn} 0.5s ease;

  
  &:disabled {
    pointer-events: none;
    background-color: #ccc; 
    cursor: not-allowed; 
  }
`;

export const StyledNotificationContent = styled.span`
  span {
    font-family: inherit;
    font-size: 13px;
    font-weight: bold;
    color: darkBlack;
  }
`;