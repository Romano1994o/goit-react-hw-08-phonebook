import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { register } from './../../redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { selectNotification } from '../../redux/notification/selector';
import { GradientButton } from './../GradientButton/GradientButton';
import { GradientLink } from './../GradientLink/GradientLink';
import {
  showNotification,
  hideNotification,
} from './../../redux/notification/notificationSlice';
import { Notification } from './../Notification/Notification';
import {
  StyledForm,
  StyledLabel,
  StyledFontAwesomeIcon,
  StyledInstructions,
  SignInText,
  StyledField,
  StyledRegisterSection,
} from './RegistrationForm.styled';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(4, 'Name should be at least 4 characters')
    .max(24, 'Name should not exceed 24 characters')
    .matches(USER_REGEX, 'Invalid username format')
    .required('Name is required'),
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegistrationForm = () => {
  const [nameIcon, setNameIcon] = useState('faTimes');
  const [emailIcon, setEmailIcon] = useState('faTimes');
  const [passwordIcon, setPasswordIcon] = useState('faTimes');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('faTimes');

  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setFieldError }) => {
    try {
      const response = await dispatch(register(values));
      resetForm(initialValues);

      setNameIcon('faTimes');
      setEmailIcon('faTimes');
      setPasswordIcon('faTimes');
      setConfirmPasswordIcon('faTimes');

      if (response && response.error) {
        const emailTakenNotificationId = nanoid();
        dispatch(
          showNotification({
            id: emailTakenNotificationId,
            title: 'Error',
            type: 'error',
            content: `Email ${values.email} is already taken!`,
          })
        );

        setTimeout(() => {
          dispatch(hideNotification(emailTakenNotificationId));
        }, 5000);
      } else {
        const successNotificationId = nanoid();
        dispatch(
          showNotification({
            id: successNotificationId,
            title: 'Success',
            type: 'success',
            content: 'You have successfully registered!',
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
          content: 'Registration failed. Please try again.',
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
          <StyledRegisterSection>
            <GradientLink>
              <span
                style={{ fontSize: '30px', color: 'white', fontWeight: '700' }}
              >
                Register
              </span>
            </GradientLink>

            <StyledForm>
              <StyledLabel htmlFor="name">
                Name:
                <StyledFontAwesomeIcon
                  icon={nameIcon}
                  className={`validation-icon ${
                    nameIcon === faCheck ? 'valid' : 'invalid'
                  }`}
                />
              </StyledLabel>
              <StyledField
                type="text"
                id="name"
                name="name"
                onChange={e => {
                  const nameIsValid = validationSchema.fields.name.isValidSync(
                    e.target.value
                  );
                  setNameIcon(nameIsValid ? faCheck : faTimes);
                  setFieldValue('name', e.target.value);
                }}
                onBlur={() => {
                  if (!errors.name) {
                    setNameIcon(faCheck);
                  }
                }}
              />
              {nameIcon === faTimes && (
                <StyledInstructions className="instructions">
                  <StyledFontAwesomeIcon icon={faInfoCircle} /> 4 to 24
                  characters.{' '}
                  <span
                    aria-label="at symbol"
                    style={{
                      fontSize: '10px',
                      color: 'black',
                      fontWeight: '500',
                    }}
                  >
                    .
                  </span>{' '}
                  Must begin with a letter. <br />
                  <span
                    aria-label="at symbol"
                    style={{
                      fontSize: '10px',
                      color: 'black',
                      fontWeight: '500',
                    }}
                  >
                    ......
                  </span>{' '}
                  Letters, numbers, underscores, hyphens allowed.
                </StyledInstructions>
              )}

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
                  characters.{' '}
                  <span
                    aria-label="at symbol"
                    style={{
                      fontSize: '10px',
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
                  Allowed special characters:{' '}
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

              <StyledLabel htmlFor="confirmPassword">
                Confirm Password:
                <StyledFontAwesomeIcon
                  icon={confirmPasswordIcon}
                  className={`validation-icon ${
                    confirmPasswordIcon === faCheck ? 'valid' : 'invalid'
                  }`}
                />
              </StyledLabel>
              <StyledField
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={e => {
                  const confirmPasswordIsValid =
                    values.password === e.target.value;
                  setConfirmPasswordIcon(
                    confirmPasswordIsValid ? faCheck : faTimes
                  );
                  setFieldValue('confirmPassword', e.target.value);
                }}
                onBlur={() => {
                  if (!errors.confirmPassword) {
                    setConfirmPasswordIcon(faCheck);
                  }
                }}
              />
              {confirmPasswordIcon === faTimes && (
                <StyledInstructions className="instructions">
                  <StyledFontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </StyledInstructions>
              )}

              <GradientButton
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
              >
                Sign Up
              </GradientButton>
              <SignInText>
                Already have an account?
                <br />
                <GradientLink to="/login">Sign in</GradientLink>
              </SignInText>
            </StyledForm>
          </StyledRegisterSection>
        )}
      </Formik>
    </>
  );
};
