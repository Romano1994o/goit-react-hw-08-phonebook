
import {
    StyledLink,
    GradientSpan,
    
   
  } from './GradientLink.styled';

  export const GradientLink = ({ to, type, disabled, children }) => {
    return (
      <StyledLink to={to} type={type} disabled={disabled}>
        {children}
        <GradientSpan></GradientSpan>
        <GradientSpan></GradientSpan>
        <GradientSpan></GradientSpan>
        <GradientSpan></GradientSpan>
      </StyledLink>
    );
  };


