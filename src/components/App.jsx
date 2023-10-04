import { useDispatch } from 'react-redux';
import { lazy, useEffect, Suspense } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { Loading } from './Loading/Loading';


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegistrationPage = lazy(() => import('../pages/Registration/Registration'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Suspense fallback={<Loading />} >
        <HomePage />
      </Suspense>} />
      <Route path="/register" element={
        <PublicRoute redirectTo="/contacts" component={
          <Suspense fallback={<Loading />} >
            <RegistrationPage />
          </Suspense>
        } />
      } />
      <Route path="/login" element={
        <PublicRoute redirectTo="/contacts" component={
          <Suspense fallback={<Loading />} >
            <LoginPage />
          </Suspense>
        } />
      } />
      <Route path="/contacts" element={
        <PrivateRoute redirectTo="/login" component={
          <Suspense fallback={<Loading />} >
            <ContactsPage />
          </Suspense>
        } />
      } />
    </Route>
  </Routes>
  );
};
