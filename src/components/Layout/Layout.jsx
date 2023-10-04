import React  from 'react'; // Import useEffect for handling side effects
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { LayoutStyled } from './Layout.styled';
import { Loading } from 'components/Loading/Loading';


export const Layout = () => {
  

  return (
   
   
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={<Loading position="center" />}></Suspense>
      <Outlet />
     
    </LayoutStyled>


  );
};