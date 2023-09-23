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
  min-height: 100vh;
  background: linear-gradient(to bottom right, #43cea2, #185a9d);
`;

export const AppHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
  animation: ${fadeIn} 1s ease;
`;

export const AppContacts = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
  color: white;
  animation: ${fadeIn} 1s ease;
`;