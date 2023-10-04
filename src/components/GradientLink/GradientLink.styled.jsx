import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
const gradientAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const gradientAnimation2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const gradientAnimation3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const gradientAnimationDelay = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  
  overflow: hidden;
  transition: 0.5s;
  margin: 10px auto;
  max-width: 170px;
  font-weight: 500;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    border-color: #03e9f4;
  }

  &:hover::before,
  &:focus::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    z-index: -1;
    animation: ${gradientAnimation} 1s linear infinite;
  }

  &:hover::after,
  &:focus::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(180deg, transparent, #03e9f4);
    z-index: -1;
    animation: ${gradientAnimation2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:hover span:nth-child(1),
  &:focus span:nth-child(1) {
    animation: ${gradientAnimation} 1s linear infinite;
  }

  &:hover span:nth-child(2),
  &:focus span:nth-child(2) {
    animation: ${gradientAnimation2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:hover span:nth-child(3),
  &:focus span:nth-child(3) {
    animation: ${gradientAnimationDelay} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:hover span:nth-child(4),
  &:focus span:nth-child(4) {
    animation: ${gradientAnimation3} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

export const GradientSpan = styled.span`
  position: absolute;
  display: block;
  pointer-events: none;
`;