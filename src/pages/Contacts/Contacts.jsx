import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './../../components/ContactForm/ContactForm';
import { Filter } from './../../components/Filter/Filter';
import { Loading } from './../../components/Loading/Loading';
import { ContactList } from './../../components/ContactList/ContactList';
import { useEffect} from 'react';
import { fetchContacts } from './../../redux/contacts/operations';
import { AppContainer, AppHeader, AppContacts } from './Contacts.styled';

import { getContactsIsExist } from './../../redux/contacts/selectors';

const ContactsPage = () => {
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
export default ContactsPage;