import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';
import { showNotification, hideNotification } from 'redux/notificationSlice';
import { selectContacts, selectNotification } from 'redux/selectors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notification } from './../Notification/Notification';
import {PatternFormat} from 'react-number-format'; 

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
  StyledSubmitButton,
  StyledNotificationContent,
} from './ContactForm.styled';



const ContactsValidation = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string()
  .matches(/^\+38 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'Invalid phone number format')
});
const initialValues = { name: '', number: '' };
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const notifications = useSelector(selectNotification);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const formattedName = values.name.charAt(0).toUpperCase() + values.name.slice(1);
    const formattedNumber = values.number;
    const existingContactByName = contacts.find(contact => contact.name === formattedName);
    const existingContactByNumber = contacts.find(contact => contact.phone === formattedNumber);

    if (existingContactByName) {
      dispatch(
        showNotification({
          id: nanoid(),
          title: 'Error',
          type: 'error',
          content: (
            <StyledNotificationContent>
              Name <span>{formattedName}</span> is already in contacts
            </StyledNotificationContent>
          ),
        })
      );
      return;
    }

    if (existingContactByNumber) {
      dispatch(
        showNotification({
          id: nanoid(),
          title: 'Error',
          type: 'error',
          content: (
            <StyledNotificationContent>
              Number <span>{formattedNumber}</span> is already in contacts
            </StyledNotificationContent>
          ),
        })
      );
      return;
    }

    dispatch(
      addContact({ name: formattedName, phone: formattedNumber, id: nanoid() })
    );

    resetForm();

    dispatch(
      showNotification({
        id: nanoid(),
        title: 'Success',
        type: 'success',
        content: (
          <StyledNotificationContent>
            Contact <span>{formattedName}</span> added successfully
          </StyledNotificationContent>
        ),
      })
    );

    setTimeout(() => {
      dispatch(hideNotification());
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
            onHide={handleHideNotification}
          />
        ))}

      <Formik
        initialValues={initialValues}
        validationSchema={ContactsValidation}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit,  values, isValid,
    
    handleChange, 
    handleBlur, }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Name
              <StyledInput
                type="text"
                name="name"
                value={values.name}
                
              />
              <StyledErrorMessage name="name" component="div" />
            </StyledLabel>
            <StyledLabel>
              Number
              <PatternFormat
  format="+38 (0##) ###-##-##"
  mask="_"
  allowEmptyFormatting={true}
  customInput={StyledInput}
  type="tel"
  name="number"
  value={values.number}
  onChange={handleChange}
  onBlur={handleBlur}
/>
              <StyledErrorMessage name="number" component="div" />
            </StyledLabel>

            <StyledSubmitButton type="submit" disabled={!isValid}>
  Add contact
</StyledSubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
