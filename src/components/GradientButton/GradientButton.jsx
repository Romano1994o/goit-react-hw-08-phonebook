import {
    StyledButton,
    GradientSpan,
    
   
  } from './GradientButton.styled';

  export const GradientButton = ({ type, disabled, children }) => {
    return (
      <StyledButton type={type} disabled={disabled}>
        {children}
        <GradientSpan></GradientSpan>
        <GradientSpan></GradientSpan>
        <GradientSpan></GradientSpan>
        <GradientSpan></GradientSpan>
      </StyledButton>
    );
  };


