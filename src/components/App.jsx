import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Loading } from './Loading/Loading';
import { ContactList } from './ContactList/ContactList';
import { useEffect} from 'react';
import { fetchContacts } from 'redux/operations';
import { AppContainer, AppHeader, AppContacts } from './App.styled';

import { getContactsIsExist } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsIsExist);
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppHeader >Phonebook</AppHeader>
      <ContactForm />
      <AppContacts>Contacts</AppContacts>
      <Filter />
      <Loading />
      {contacts && <ContactList />}
    
    </AppContainer>
  );
};
