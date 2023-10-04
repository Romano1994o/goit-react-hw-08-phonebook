import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
background: linear-gradient(to top, #185a9d 0%, #185a9d 45%, #185a9d 90%, #ffffff 100%);
  overflow-x: hidden;
  font-family: 'Arial', sans-serif; 
  padding: 40px;
  margin-top: 5px;
  text-align: center;
`;



const Move = keyframes`
  0% {
    transform: translate(-33%, 0);
    
  }
 
  85% {
    text-shadow: 
      8px 16px 25px rgba(255, 255, 255, 0.75),
      -1px -1px 0 hsl(224, 85%, 66%),
      -2px -2px 0 hsl(269, 85%, 66%),
      -3px -3px 0 hsl(314, 85%, 66%),
      -4px -4px 0 hsl(359, 85%, 66%),
      -5px -5px 0 hsl(44, 85%, 66%),
      -6px -6px 0 hsl(89, 85%, 66%),
      -7px -7px 0 hsl(134, 85%, 66%),
      -8px -8px 0 hsl(179, 85%, 66%);
  }

  100% {
    transform: translate(33%, 0);
    
  }
`;




export const WordsContainerContacts = styled.div`
  color:#185a9d;
  font-size: 0;
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 125px;
    display: inline-block;
    animation: ${Move} 10.0s ease-in-out infinite; 
  }

  span:nth-child(2) {
    
    animation-delay: 0.5s;
  }

  span:nth-child(3) {
    font-size: 110px;
    animation-delay: 1.0s;
  }

  span:nth-child(4) {
    font-size: 110px;
    animation-delay: 1.5s;
  }
  span:nth-child(5) {
    font-size: 120px;
    animation-delay: 2.0s;
  }
  span:nth-child(6) {
    font-size: 110px;
   
    animation-delay: 2.5s;
  }
  span:nth-child(7) {
    font-size: 110px;
    animation-delay: 3.0s;
  }
  span:nth-child(8) {
    font-size: 125px;
    animation-delay: 3.5s;
  }

`;
export const WordsContainerPhone = styled.div`
  color:  #185a9d;
 
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 140px;
    display: inline-block;
    animation: ${Move} 10.0s ease-in-out infinite; 
  }

  span:nth-child(2) {
    font-size:120px;
    animation-delay: 0.9s;
  }

  span:nth-child(3) {
    font-size: 140px;
    animation-delay: 1.8s;
  }

  span:nth-child(4) {
    font-size: 120px;
    animation-delay: 2.6s;
  }
  span:nth-child(5) {
    font-size: 140px;
    animation-delay: 3.5s;
  }


`;

export const WordsContainerBook = styled.div`
  color:  #185a9d;
  font-size: 0;
  line-height: 1;
  font-weight: bold; 

  span {
    font-size: 145px;
    display: inline-block;
    animation: ${Move} 10.5s ease-in-out infinite; 
  }

  span:nth-child(2) {
    font-size: 125px;
    animation-delay: 1.0s;
  }

  span:nth-child(3) {
    font-size: 125px;
    animation-delay: 2.0s;
  }

  span:nth-child(4) {
    font-size: 145px;
    animation-delay: 3.0s;
  }
  

  
`;