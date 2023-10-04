import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from './../../redux/contacts/operations';
import {
  showNotification,
  hideNotification,
} from './../../redux/notification/notificationSlice';
import { selectContacts } from './../../redux/contacts/selectors';
import { Notification } from './../Notification/Notification';
import { selectNotification } from './../../redux/notification/selector';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format';
import { GradientButton } from './../GradientButton/GradientButton';
import { StyledContactFormSection } from './ContactForm.styled';
import {
  StyledForm,
  StyledLabel,
  StyledFontAwesomeIcon,
  StyledInstructions,
  StyledField,
} from './../RegistrationForm/RegistrationForm.styled';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const NUMBER_REGEX = /^\+38 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Name is required')
    .min(5, 'Name should be of a minimum 4 characters length')
    .matches(NAME_REGEX, 'Name must contain letters and may include digits'),
  number: Yup.string().matches(NUMBER_REGEX, 'Invalid phone number format'),
});
const initialValues = { name: '', number: '' };
export const ContactForm = () => {
  const [nameIcon, setNameIcon] = useState('faTimes');
  const [numberIcon, setNumberIcon] = useState('faTimes');
  const contacts = useSelector(selectContacts);
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    setNameIcon('faTimes');
    setNumberIcon('faTimes');
    const formattedName =
      values.name.charAt(0).toUpperCase() + values.name.slice(1);
    const formattedNumber = values.number;
    const existingContactByName = contacts.find(
      contact => contact.name === formattedName
    );
    const existingContactByNumber = contacts.find(
      contact => contact.number === formattedNumber
    );

    if (existingContactByName) {
      dispatch(
        showNotification({
          id: nanoid(),
          title: 'Error',
          type: 'error',
          content: (
            <>
              Name <b>{formattedName}</b> is already in contacts
            </>
          ),
        })
      );
      setTimeout(id => {
        dispatch(hideNotification(id));
      }, 5000);
      return;
    }

    if (existingContactByNumber) {
      dispatch(
        showNotification({
          id: nanoid(),
          title: 'Error',
          type: 'error',
          content: (
            <>
              Number <b>{formattedNumber}</b> is already in contacts
            </>
          ),
        })
      );
      setTimeout(id => {
        dispatch(hideNotification(id));
      }, 5000);
      return;
    }

    dispatch(
      addContact({ name: formattedName, number: formattedNumber, id: nanoid() })
    );

    resetForm(initialValues);
    

    dispatch(
      showNotification({
        id: nanoid(),
        title: 'Success',
        type: 'success',
        content: (
          <>
            Contact <b>{formattedName}</b> has been deleted successfully
          </>
        ),
      })
    );
    setTimeout(id => {
      dispatch(hideNotification(id));
    }, 5000);
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
            onHide={handleHideNotification.id}
          />
        ))}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          values,
          isValid,
          
          
          setFieldValue,
          errors,
        }) => (
          <StyledContactFormSection>
            <StyledForm onSubmit={handleSubmit}>
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
                  value={values.name}
                  onChange={e => {
                    const nameIsValid =
                      validationSchema.fields.name.isValidSync(e.target.value);
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
             
             <StyledLabel htmlFor="number">
                Number:
                <StyledFontAwesomeIcon
                  icon={numberIcon}
                  className={`validation-icon ${
                    numberIcon === faCheck ? 'valid' : 'invalid'
                  }`}
                />
              </StyledLabel>
                <PatternFormat
                  format="+38 (0##) ###-##-##"
                  mask="_"
                  allowEmptyFormatting={true}
                  customInput={StyledField}
                  type="tel"
                  id="number"
                  name="number"
                  value={values.number}
                  onChange={e => {
                    const numberIsValid =
                      validationSchema.fields.number.isValidSync(
                        e.target.value
                      );
                    setNumberIcon(numberIsValid ? faCheck : faTimes);
                    setFieldValue('number', e.target.value);
                  }}
                  onBlur={() => {
                    if (!errors.number) {
                      setNumberIcon(faCheck);
                    }
                  }}
                />
                {numberIcon === faTimes && (
                  <StyledInstructions className="instructions">
                  <StyledFontAwesomeIcon icon={faInfoCircle} /> Correct phone number format: +38 (0XX) XXX-XX-XX
                  <br />
                  For example: +38 (099) 123-45-67
                </StyledInstructions>
                )}
             

              <GradientButton type="submit" disabled={!isValid}>
                Add contact
              </GradientButton>
            </StyledForm>
          </StyledContactFormSection>
        )}
      </Formik>
    </>
  );
};
