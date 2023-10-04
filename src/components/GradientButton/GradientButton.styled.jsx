import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    border-radius: 25px;
    left: 100%;
  }
`;

const gradientAnimationDelay = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    border-radius: 25px;
    top: 100%;
  }
`;

const gradientAnimation2 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    border-radius: 25px;
    right: 100%;
  }
`;

const gradientAnimation3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    border-radius: 25px;
    right: 100%;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  border-radius: 25px;
  padding: 5px;
  width: 150px; 
  color: #03e9f4;
  font-size: 16px;
  jastify-content: center;
  align-items:center;
  
  font-weight:800;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 10px auto; 

  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }

  &:hover span:nth-child(1) {
    animation: ${gradientAnimation} 1s linear infinite;
  }

  &:hover span:nth-child(2) {
    animation: ${gradientAnimation2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:hover span:nth-child(3) {
    animation: ${gradientAnimationDelay} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:hover span:nth-child(4) {
    animation: ${gradientAnimation3} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

export const GradientSpan = styled.span`
  position: absolute;
  display: block;
`;