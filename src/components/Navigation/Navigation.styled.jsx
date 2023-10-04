import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const shadowChange = keyframes`  
0% {
  color: #43cea2;
  text-shadow: 
  2px 4px 6px rgba(255, 255, 255, 1),
  -0.5px -0.5px 0 black, 
  0.5px 0.5px 0 black;
}
50% {
  
  text-shadow: 
  -0.3px -0.3px 0 black,
  0.3px 0.3px 0 black,
  -0.6px -0.6px 0 hsl(224, 85%, 66%),
  -0.9px -0.9px 0 hsl(269, 85%, 66%),
  -1.2px -1.2px 0 hsl(314, 85%, 66%),
  -1.5px -1.5px 0 hsl(359, 85%, 66%),
  -1.8px -1.8px 0 hsl(44, 85%, 66%);
   
}
100% {
  color: #185a9d;
  text-shadow: 
  3px 6px 9px rgba(255, 255, 255, 1),
    -0.3px -0.3px 0 black,
    0.3px 0.3px 0 black,
    -0.6px -0.6px 0 hsl(224, 85%, 66%),
    -0.9px -0.9px 0 hsl(269, 85%, 66%),
    -1.2px -1.2px 0 hsl(314, 85%, 66%),
    -1.5px -1.5px 0 hsl(359, 85%, 66%),
    -1.8px -1.8px 0 hsl(44, 85%, 66%),
    -2.1px -2.1px 0 hsl(89, 85%, 66%),
    -2.4px -2.4px 0 hsl(134, 85%, 66%),
    -2.7px -2.7px 0 hsl(179, 85%, 66%);
}
`;

const shadowChangeByActive = keyframes` 
  
  0% {
    color: #43cea2; 
   
  }
  25% {
    color: #185a9d; 
    
  }
  50% {
    color: #43cea2; 
   
  }
  50% {
    color: #185a9d; 
   
  }
  100% {
    color: #43cea2;
    
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: white;
  margin-bottom:10px;
  text-shadow: 
    -1px -1px 0 #185a9d,
    -0.5px -0.5px 0 #43cea2,
    0.5px 0.5px 0 #43cea2,
    1px 1px 0 #185a9d;
  transition: text-shadow 2.5s, color 2.5s; 

  &:hover {
    color: #43cea2;
    font-size: 27px;
    animation: ${shadowChange} 2.5s ease-in-out infinite; 
  }


 
   &:hover,
   &.active {
    
    font-size: 27px;
    text-shadow: 
      8px 16px 25px rgba(255, 255, 255, 1),
      -0.3px -0.3px 0 black,
      0.3px 0.3px 0 black,
      -0.6px -0.6px 0 hsl(224, 85%, 66%),
      -0.9px -0.9px 0 hsl(269, 85%, 66%),
      -1.2px -1.2px 0 hsl(314, 85%, 66%),
      -1.5px -1.5px 0 hsl(359, 85%, 66%),
      -1.8px -1.8px 0 hsl(44, 85%, 66%),
      -2.1px -2.1px 0 hsl(89, 85%, 66%),
      -2.4px -2.4px 0 hsl(134, 85%, 66%),
      -2.7px -2.7px 0 hsl(179, 85%, 66%);
    animation: ${shadowChangeByActive} 7.7s ease-in-out infinite;
  }
  
  

`;
