import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to top,
    #fff 0%,
    #43cea2 25%,
    #185a9d 50%,
    #43cea2 75%,
    #185a9d 90%,
    #ffffff 100%
  );
`;

export const AppHeader = styled.h1`
  font-size: 34px;
  margin-top: 50px;
  margin-bottom: 20px;
  color: white;
  animation: ${fadeIn} 1s ease;
`;

export const AppContacts = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  color: white;
  animation: ${fadeIn} 1s ease;
`;
