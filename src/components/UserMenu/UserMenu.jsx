import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from './../../redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { selectNotification } from '../../redux/notification/selector';
import { showNotification, hideNotification } from './../../redux/notification/notificationSlice';
import { Notification } from './../Notification/Notification';

import { NavLinkStyled } from './../Navigation/Navigation.styled';
import {
  LogoutBtn,
  UserMenuLinks,
  User,
  StyledLogout,
  NavLinkLogout,
} from './UserMenu.styled';

export const UserMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const user = useSelector(selectUser);
  const wordLogout = 'Logout';
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const handleLogout = async (values) => {
    setIsLoggingOut(true);
  
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await dispatch(logOut(values));
  
      if (!isLoggingOut) {
        const successNotificationId = nanoid();
        dispatch(
          showNotification({
            id: successNotificationId,
            title: 'Success',
            type: 'success',
            content: (
              <>
                Account <b>{user.email}</b> successfully Logout!
              </>
            ),
          })
        );
  
        setTimeout(() => {
          dispatch(hideNotification(successNotificationId));
        }, 5000);
      }
    } catch (error) {
      console.error('Error object:', error);
  
      if (!isLoggingOut) {
        const errorNotificationId = nanoid();
        dispatch(
          showNotification({
            id: errorNotificationId,
            title: 'Error',
            type: 'error',
            content: 'Logout failed. Please try again.',
          })
        );
  
        setTimeout(() => {
          dispatch(hideNotification(errorNotificationId));
        }, 5000);
      }
    }
  
    setTimeout(() => {
      setIsLoggingOut(false); 
    }, 2000);
  };

  const handleHideNotification = (id) => {
    dispatch(hideNotification(id));
  };

  return (
    <>
      {notifications &&
        notifications.map((notification, index) => (
          <Notification
            key={`${nanoid()}-${index}`}
            id={nanoid()}
            type={notification.type}
            title={notification.title}
            content={notification.content}
            onHide={handleHideNotification}
          />
        ))}
      <UserMenuLinks>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        <User isLoggingOut={isLoggingOut}>
          {user.email}
        </User>
        <LogoutBtn >
          <NavLinkLogout to="/">
            <StyledLogout
              className={isActive ? 'active' : ''}
              onClick={() => {
                if (!isActive) {
                  handleLogout();
                  setIsActive(true);
                }
              }}
            >
              {wordLogout.split('').map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </StyledLogout>
          </NavLinkLogout>
        </LogoutBtn>
      </UserMenuLinks>
    </>
  );
};
