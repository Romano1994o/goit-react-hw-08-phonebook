import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;


export const GradientBorder = styled.div`
  --border-width: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 3px;
  height: var(--height);
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  
  color: 	#696969;
  background: #F5F5F5;
  border-radius: var(--border-width);
  

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(4 * var(--border-width));
    animation: ${moveGradient} 4s alternate infinite;
  }
`;

export const NotificationsContainer = styled.div`
  --width: 22rem;
  --height: 5rem;
  --gap: 1rem;

  position: fixed;
  top: 1rem;
  right: 1rem;
  pointer-events: none;

  &:hover {
    .notification {
      transform: translateY(0) scale(1);

      .notification-inner {
        opacity: 1;
        
      }

      &.exit-active {
        transform: translateY(0) scale(0.8);
        margin-right: calc((var(--width) + var(--gap)) * -1);
      }
    }
  }
`;

export const NotificationItem = styled(CSSTransition)`
  display: flex;
  transform: translateY(var(--y)) scale(var(--scale));
  transform-origin: center;
  transition: all var(--duration) ease-in-out;
  pointer-events: auto;

  &.enter {
    transform: translateY(-100%) scale(1);
    margin-right: calc((var(--width) + var(--gap)) * -1);
  }

  &.enter-active {
    transform: translateY(var(--y)) scale(var(--scale));
    margin-right: 0;
  }

  &.exit-active {
    transform: translateY(calc(var(--y) - 10%)) scale(calc(var(--scale) - 0.1));
    
  }
 
`;

export const NotificationInner = styled.div`
  background-color: var(--bg);
  -webkit-backdrop-filter: blur(0.5rem);
  backdrop-filter: blur(0.5rem);
  padding: 0 1rem;
  border: 3px;
  opacity: var(--opacity);
  transition: all var(--duration) ease-in-out;
  display: flex;
  align-items: center;
  position: relative;
  max-width: 16.5rem;


  h2 {
    font-weight: bold;
    font-size: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.7rem;

  }
  }

  .close {
    background: none;
    border: none;
    position: absolute;
    right: -0.2rem;
    top: -10px;
    font-size: 0.8rem;
    padding: 0.3rem;
    cursor: pointer;
    display: flex;
  }
};
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem; 
  height: 2.8rem; 
  border-radius: 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  color: white;

  &.error {
    background-color: #f87171;
  }

  &.success {
    background-color: #10b981;
  }

  &.info {
    background-color: #60a5fa;
  }

  &.warning {
    background-color: #f59e0b;
  }
  
`;
