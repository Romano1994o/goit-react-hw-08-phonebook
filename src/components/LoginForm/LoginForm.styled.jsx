import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledLoginSection = styled.section`
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

export const SignInText = styled.p`
color: white;
`;



