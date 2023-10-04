import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  StyledLabel,
  StyledFontAwesomeIcon,
  StyledInstructions,
  SignInText,
  StyledField,
} from './../RegistrationForm/RegistrationForm.styled';

import { StyledLoginSection } from './LoginForm.styled';
import { GradientButton } from './../GradientButton/GradientButton';
import { GradientLink } from './../GradientLink/GradientLink';
import { logIn } from 'redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { selectNotification } from '../../redux/notification/selector';
import {
  showNotification,
  hideNotification,
} from './../../redux/notification/notificationSlice';

import { Notification } from './../Notification/Notification';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .trim()
    .min(8, 'Email should be at least 8 characters')
    .max(24, 'Email should not exceed 24 characters')
    .matches(EMAIL_REGEX, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .trim()
    .min(8, 'Password should be at least 8 characters')
    .max(24, 'Password should not exceed 24 characters')
    .matches(PASSWORD_REGEX, 'Invalid password format')
    .required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [emailIcon, setEmailIcon] = useState('faTimes');
  const [passwordIcon, setPasswordIcon] = useState('faTimes');
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const handleSubmit = async (
    values,
    { resetForm }
  ) => {
    try {
      const response = await dispatch(logIn(values));
      resetForm(initialValues);

      setEmailIcon('faTimes');
      setPasswordIcon('faTimes');

      if (response && response.error) {
        const emailTakenNotificationId = nanoid();
        dispatch(
          showNotification({
            id: emailTakenNotificationId,
            title: 'Email',
            type: 'error',
            content: (
              <>
                Incorrect <b>{values.email}</b> field!
              </>
            ),
          })
        );

        setTimeout(() => {
          dispatch(hideNotification(emailTakenNotificationId));
        }, 5000);
      } else if (response && response.error) {
        const logInTakenNotificationId = nanoid();
        dispatch(
          showNotification({
            id: logInTakenNotificationId,
            title: 'Error',
            type: 'error',
            content: 'Incorrect password or email field',
          })
        );

        setTimeout(() => {
          dispatch(hideNotification(logInTakenNotificationId));
        }, 5000);
      } else {
        const successNotificationId = nanoid();
        dispatch(
          showNotification({
            id: successNotificationId,
            title: 'Success',
            type: 'success',
            content: 'You have successfully logged in!',
          })
        );

        setTimeout(() => {
          dispatch(hideNotification(successNotificationId));
        }, 5000);
      }
    } catch (error) {
      console.error('Error object:', error);

      const errorNotificationId = nanoid();
      dispatch(
        showNotification({
          id: errorNotificationId,
          title: 'Error',
          type: 'error',
          content: 'Login failed. Please try again.',
        })
      );

      setTimeout(() => {
        dispatch(hideNotification(errorNotificationId));
      }, 5000);
    }
  };

  const handleHideNotification = id => {
    dispatch(hideNotification(id));
  };

  return (
    <>
      {notifications &&
        notifications.map((notification, index) => (
          <Notification
            key={`${notification.id}-${index}`}
            id={notification.id}
            type={notification.type}
            title={notification.title}
            content={notification.content}
            onHide={handleHideNotification}
          />
        ))}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty, values, setFieldValue, errors }) => (
          <StyledLoginSection>
            <GradientLink>
              <span
                style={{ fontSize: '30px', color: 'white', fontWeight: '700' }}
              >
                Login Form
              </span>
            </GradientLink>
            <StyledForm>
              <StyledLabel htmlFor="email">
                Email:
                <StyledFontAwesomeIcon
                  icon={emailIcon}
                  className={`validation-icon ${
                    emailIcon === faCheck ? 'valid' : 'invalid'
                  }`}
                />
              </StyledLabel>
              <StyledField
                type="email"
                id="email"
                name="email"
                onChange={e => {
                  const emailIsValid =
                    validationSchema.fields.email.isValidSync(e.target.value);
                  setEmailIcon(emailIsValid ? faCheck : faTimes);
                  setFieldValue('email', e.target.value);
                }}
                onBlur={() => {
                  if (!errors.email) {
                    setEmailIcon(faCheck);
                  }
                }}
              />
              {emailIcon === faTimes && (
                <StyledInstructions className="instructions">
                  <StyledFontAwesomeIcon icon={faInfoCircle} />8 to 24
                  characters.
                  <span
                    aria-label="at symbol"
                    style={{
                      fontSize: '12px',
                      color: 'black',
                      fontWeight: '500',
                    }}
                  >
                    *
                  </span>{' '}
                  Must begin with a letter.
                  <br />
                  Allowed special characters:{' '}
                  <span aria-label="at symbol">@</span>{' '}
                </StyledInstructions>
              )}

              <StyledLabel htmlFor="password">
                Password:
                <StyledFontAwesomeIcon
                  icon={passwordIcon}
                  className={`validation-icon ${
                    passwordIcon === faCheck ? 'valid' : 'invalid'
                  }`}
                />
              </StyledLabel>
              <StyledField
                type="password"
                id="password"
                name="password"
                onChange={e => {
                  const passwordIsValid =
                    validationSchema.fields.password.isValidSync(
                      e.target.value
                    );
                  setPasswordIcon(passwordIsValid ? faCheck : faTimes);
                  setFieldValue('password', e.target.value);
                }}
                onBlur={() => {
                  if (!errors.password) {
                    setPasswordIcon(faCheck);
                  }
                }}
              />
              {passwordIcon === faTimes && (
                <StyledInstructions className="instructions">
                  <StyledFontAwesomeIcon icon={faInfoCircle} />8 to 24
                  characters.<span aria-label="at symbol" style={{ fontSize: '12px', color: 'black', fontWeight: '500' }}>*</span>{' '}Allowed special characters:{' '}
                  <span aria-label="exclamation mark">!</span>{' '}
                  <span aria-label="at symbol">@</span>{' '}
                  <span aria-label="hashtag">#</span>{' '}
                  <span aria-label="dollar sign">$</span>{' '}
                  <span aria-label="percent">%</span>
                  <br />
                  Must include uppercase and lowercase letters,
                  <br />a number and a special character.
                </StyledInstructions>
              )}

              <GradientButton
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
              >
                Log In
              </GradientButton>
              <SignInText>
                Don't have an account?
                <br />
                <GradientLink to="/register">Sign Up</GradientLink>
              </SignInText>
            </StyledForm>
          </StyledLoginSection>
        )}
      </Formik>
    </>
  );
};
