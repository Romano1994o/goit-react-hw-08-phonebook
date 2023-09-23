import React from 'react';
import {
  NotificationsContainer,
  NotificationItem,
  NotificationInner,
  GradientBorder,
  IconWrapper,
} from './Notification.styled';
import { MdClose } from 'react-icons/md';
import { BsCheckLg, BsXLg, BsInfoLg, BsExclamationLg } from 'react-icons/bs';
 


export const getNotificationIcon = type => {
  switch (type) {
    case 'success':
      return BsCheckLg;
    case 'error':
      return BsXLg;
    case 'info':
      return BsInfoLg;
    case 'warning':
      return BsExclamationLg;
    default:
      return null;
  }
};

export const Notification = ({ id, title, content, type, index, total, onHide }) => {
 
  const Icon = getNotificationIcon(type);
  const inverseIndex = total - index - 1;
  const scale = 1 - inverseIndex * 0.05;
  const opacity = 1 - (inverseIndex / total) * 0.1;
  const bg = `hsl(0 0% ${100 - inverseIndex * 15}% / 40%)`;
  const y = inverseIndex * 100 * 0.9;

  const handleHideNotification = () => {
    onHide(id);
  };

  return (
    <NotificationsContainer>
      <NotificationItem
        key={id}
        timeout={300}
        className={`notification ${
          type === 'gradient' ? 'gradient-border' : ''
        }`}
        style={{
          '--bg': bg,
          '--opacity': opacity,
          '--scale': scale,
          '--y': `${y}%`,
        }}
      >
        <GradientBorder>
          <NotificationInner className="notification-inner gradient-border">
            <IconWrapper className={`icon ${type}`}>
              <Icon />
            </IconWrapper>
            <div>
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
            <button className="close" onClick={handleHideNotification}>
              <MdClose />
            </button>
          </NotificationInner>
        </GradientBorder>
      </NotificationItem>
    </NotificationsContainer>
  );
};

