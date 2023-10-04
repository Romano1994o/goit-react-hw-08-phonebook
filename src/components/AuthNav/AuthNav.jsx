import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

import { AuthLinks } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthLinks>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </AuthLinks>
  );
};
