import styled, { keyframes } from 'styled-components';


const loadingAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7); 
  z-index: 200;
`;

export const LoaderText = styled.div`
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 900;
  margin-bottom: 1.4rem;
`;

export const LoaderBar = styled.div`
  position: relative;
  width: 200px;
  height: 5px;
  background: rgba(255, 255, 255, 0.25);
  animation: ${loadingAnimation} 1s linear infinite; 
  
  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 0, 0);
    transform-origin: left;
  }
`;