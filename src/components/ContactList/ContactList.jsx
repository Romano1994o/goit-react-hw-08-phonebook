import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading, selectFilteredContacts } from 'redux/selectors';
import { showNotification, hideNotification } from 'redux/notificationSlice';
import { FaTrash } from 'react-icons/fa';
import {
  ContactListContainer,
  StyledTable,
  TableHeader,
  TableCell,
  TableRow,
  DeleteButton,
  StyledNotificationContent,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    dispatch(
      showNotification({
        id: nanoid(),
        title: 'Success',
        type: 'success',
        content: (
          <StyledNotificationContent>
            Contact <span>{name}</span> has been deleted successfully
          </StyledNotificationContent>
        ),
      })
    );
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };

  return (
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
              <TableCell>{contact.phone}</TableCell>
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
  );
};
