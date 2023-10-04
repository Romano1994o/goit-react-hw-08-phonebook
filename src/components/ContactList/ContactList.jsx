import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading, selectFilteredContacts } from 'redux/contacts/selectors';
import { showNotification, hideNotification } from 'redux/notification/notificationSlice';
import { Notification } from './../Notification/Notification';
import { selectNotification} from './../../redux/notification/selector';
import { FaTrash } from 'react-icons/fa';
import {
  ContactListContainer,
  StyledTable,
  TableHeader,
  TableCell,
  TableRow,
  DeleteButton,
 
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);
  const notifications = useSelector(selectNotification);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    dispatch(
      showNotification({
        id: nanoid(),
        title: 'Success',
        type: 'success',
        content: (
          <>
            Contact <b>{name}</b> has been deleted successfully
          </>
        ),
      })
    );
    setTimeout((id) => {
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
            onHide={handleHideNotification}
          />
        ))}

    <ContactListContainer>
      
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.number}</TableCell>
              <TableCell>
                <DeleteButton
                  onClick={() => handleDelete(contact.id, contact.name)}
                  disabled={isLoading}
                >
                  <FaTrash /> Delete
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </ContactListContainer>
    </>
  );
};
