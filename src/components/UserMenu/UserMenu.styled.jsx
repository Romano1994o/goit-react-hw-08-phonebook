import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Hover_L = keyframes`
0% {
  text-transform: uppercase;
  transform:translate(0, 0)  scale(1.0, 1.0);
}


50%, 75% {
  text-transform: uppercase;
  transform: translate(-940%, -35%) rotate(-270deg) scale(1.7, 1.5) ;
}



100% {
  color: #185a9d;
  text-transform: uppercase;
  transform: translate(-940%, -35%) rotate(-270deg) scale(1.7, 1.5) ;
  text-shadow:  
1px 1px 1px rgba(1, 1, 255, 0.5),
0.5px 0.5px 0 black,
1px 1px 0 hsl(224, 85%, 66%),
1.5px 1px 0 hsl(134, 85%, 66%),
2px 1px 0 hsl(269, 85%, 66%),
2.5px 1px 0 hsl(44, 85%, 66%),
3px 1px 0 hsl(314, 85%, 66%),
3.5px 1px 0 hsl(89, 85%, 66%),
1px 1px 0 black;
}
`;

const Active_L = keyframes`
0% {
  text-transform: uppercase;
  transform:translate(0, 0)  scale(1.0, 1.0);
}


50%, 75% {
  text-transform: uppercase;
  transform: translate(-940%, -35%) rotate(-270deg) scale(1.7, 1.5) ;
}



100% {
  color: #185a9d;
  text-transform: uppercase;
  transform:  translate(400%, -40%) rotate(-270deg) scale(0, 0) ;
  text-shadow:  
1px 1px 1px rgba(1, 1, 255, 0.5),
0.5px 0.5px 0 black,
1px 1px 0 hsl(224, 85%, 66%),
1.5px 1px 0 hsl(134, 85%, 66%),
2px 1px 0 hsl(269, 85%, 66%),
2.5px 1px 0 hsl(44, 85%, 66%),
3px 1px 0 hsl(314, 85%, 66%),
3.5px 1px 0 hsl(89, 85%, 66%),
1px 1px 0 black;
}
`;
const MoveFirst_O = keyframes`

0% {
  text-transform: uppercase;
  transform: translate(0, 0)  skewX(0deg) scaleY(-1.0);
}

100% {
  color: #185a9d;
  transform: translate(-40px, 15px)  skewY(0deg) scale(2.5, -3.8);
  text-shadow: 
  1px 1px 1px rgba(1, 1, 255, 0.5),
  0.5px 0.5px 0 black,
  1px 1px 0 hsl(224, 85%, 66%),
 1.5px 1px 0 hsl(134, 85%, 66%),
 2px 1px 0 hsl(269, 85%, 66%),
  2.5px 1px 0 hsl(44, 85%, 66%),
  3px 1px 0 hsl(314, 85%, 66%),
  3.5px 1px 0 hsl(89, 85%, 66%),
  1px 1px 0 black;
}


`;

const Move_G = keyframes`

0% {
  text-transform: uppercase;
  transform: translate(0, 0) scale( 1.0, 1.0); 

}

100% {
  color: #185a9d;
  text-transform: uppercase;
  transform: translate(310%, -9%) scale( 0.3, 1.1);
  text-shadow: 
  1px 1px 1px rgba(1, 1, 255, 0.5),
  0.5px 0.5px 0 black,
  1px 1px 0 hsl(224, 85%, 66%),
 1.5px 1px 0 hsl(134, 85%, 66%),
 2px 1px 0 hsl(269, 85%, 66%),
  2.5px 1px 0 hsl(44, 85%, 66%),
  3px 1px 0 hsl(314, 85%, 66%),
  3.5px 1px 0 hsl(89, 85%, 66%),
  1px 1px 0 black;
}

`;

const MoveSecond_O = keyframes`
  0% {
    text-transform: uppercase;
    transform: translate(0, 0) skewY(0deg) scaleY(-1.0);
  }

  100% {
    color: #43cea2;
    transform: translate(80px, 20px) skewY(5deg) scale(2.0, -3.7);
    text-shadow: 
    1px 1px 1px rgba(1, 1, 255, 0.5),
    0.5px 0.5px 0 black,
    1px 1px 0 hsl(224, 85%, 66%),
   1.5px 1px 0 hsl(134, 85%, 66%),
   2px 1px 0 hsl(269, 85%, 66%),
    2.5px 1px 0 hsl(44, 85%, 66%),
    3px 1px 0 hsl(314, 85%, 66%),
    3.5px 1px 0 hsl(89, 85%, 66%),
    1px 1px 0 black;
   
`;

const Move_U = keyframes`
  0% {
    text-transform: uppercase;
    transform: translate(0, 0) scaleY(-1.0);
  }
  
  
  100% {
    text-transform: uppercase;
    transform: translate(-145px, -10px) skewY(25deg) scale(1.3, -1.9);
    color:  #43cea2;
    text-shadow: 
  1px 1px 1px rgba(1, 1, 255, 0.5),
  0.5px 0.5px 0 black,
  1px 1px 0 hsl(224, 85%, 66%),
 1.5px 1px 0 hsl(134, 85%, 66%),
 2px 1px 0 hsl(269, 85%, 66%),
  2.5px 1px 0 hsl(44, 85%, 66%),
  3px 1px 0 hsl(314, 85%, 66%),
  3.5px 1px 0 hsl(89, 85%, 66%),
  1px 1px 0 black;
  }
`;

const Hover_T = keyframes`
  0% {
    text-transform: uppercase;
    transform: translate(0%, 0) scaleY(1.0);
  }
  50%, 76% {
    text-transform: uppercase;
    transform: translate(-1140%, 40%) rotate(-90deg) scale(1.7, 1.5);
  }
 
100% {
    color: #185a9d;
    text-transform: uppercase;
    transform: translate(-1140%, 40%) rotate(-90deg) scale(1.7, 1.5);
    text-shadow: 
  1px 1px 1px rgba(1, 1, 255, 0.5),
  0.5px 0.5px 0 black,
  1px 1px 0 hsl(224, 85%, 66%),
 1.5px 1px 0 hsl(134, 85%, 66%),
 2px 1px 0 hsl(269, 85%, 66%),
  2.5px 1px 0 hsl(44, 85%, 66%),
  3px 1px 0 hsl(314, 85%, 66%),
  3.5px 1px 0 hsl(89, 85%, 66%),
  1px 1px 0 black;
  }
`;
const Active_T = keyframes`
  0% {
    text-transform: uppercase;
    transform: translate(0%, 0) scaleY(1.0);
  }
  50%, 76% {
    text-transform: uppercase;
    transform: translate(-1140%, 40%) rotate(-90deg) scale(1.7, 1.5);
  }
 
100% {
    color: #185a9d;
    text-transform: uppercase;
    transform: translate(100%, 40%)  rotate(-90deg)  scale(0, 0);
    text-shadow: 
  1px 1px 1px rgba(1, 1, 255, 0.5),
  0.5px 0.5px 0 black,
  1px 1px 0 hsl(224, 85%, 66%),
 1.5px 1px 0 hsl(134, 85%, 66%),
 2px 1px 0 hsl(269, 85%, 66%),
  2.5px 1px 0 hsl(44, 85%, 66%),
  3px 1px 0 hsl(314, 85%, 66%),
  3.5px 1px 0 hsl(89, 85%, 66%),
  1px 1px 0 black;
  }
`;
export const User = styled.p`
  font-weight: 400;
  font-size: 15px;
  padding: 20px;
  margin-left:100px;
  transition: transform 1.9s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    opacity 1.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  ${({ isLoggingOut }) =>
    isLoggingOut &&
    `
    transform: translateX(100%);
    opacity: 0;
    transition-delay: 1.0s; 
  `}
`;

export const UserMenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoutBtn = styled.button`
  border-radius: 3px;
  border: 0;
  line-height: 1.5;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  background: linear-gradient(to top, #43cea2, #185a9d);
  &:hover {
    background: linear-gradient(to right, #185a9d, #185a9d, #43cea2, #43cea2);
  }
  border-radius: 10px;
`;

export const NavLinkLogout = styled(NavLink)`
  font-weight: 900;
  font-size: 24px;
  text-decoration: none;
  color: white;
  text-shadow: -1px -1px 0 #185a9d, -0.5px -0.5px 0 #43cea2,
    0.5px 0.5px 0 #43cea2, 1px 1px 0 #185a9d;
`;

export const StyledLogout = styled.p`
  font-family: 'Anton', sans-serif;
  perspective: 500px;

  &:hover {
    span {
      font-size: 40px;
      display: inline-block;
      animation: ${Hover_L} 2.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }

    span:nth-child(2) {
      font-size: 45px;
      animation: ${MoveFirst_O} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }

    span:nth-child(3) {
      font-size: 45px;
      animation: ${Move_G} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }

    span:nth-child(4) {
      font-size: 45px;
      animation: ${MoveSecond_O} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
    span:nth-child(5) {
      font-size: 40px;
      animation: ${Move_U} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
    span:nth-child(6) {
      font-size: 50px;

      animation: ${Hover_T} 2.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
  }
  &.active {
    span {
      font-size: 40px;
      display: inline-block;
      animation: ${Active_L} 2.3s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
    span:nth-child(2) {
      font-size: 45px;
      animation: ${MoveFirst_O} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }

    span:nth-child(3) {
      font-size: 45px;
      animation: ${Move_G} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }

    span:nth-child(4) {
      font-size: 45px;
      animation: ${MoveSecond_O} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
    span:nth-child(5) {
      font-size: 40px;
      animation: ${Move_U} 2s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
    span:nth-child(6) {
      font-size: 50px;

      animation: ${Active_T} 2.3s cubic-bezier(0.42, 0, 0.58, 1) forwards;
    }
  }
`;
