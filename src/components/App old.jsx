import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix'; 
import { 
  AppContainer,
  AppHeader,
  AppContacts,
} from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate( prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  

  formSubmitHandler = formData => {
    const contact = {
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    };

    if (
      this.state.contacts
        .map(({ name }) => name.toLocaleLowerCase())
        .some(name => name === formData.name.toLocaleLowerCase())
    ) {
      Notiflix.Notify.warning('This contact already exists.', { position: 'center' });
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <AppContainer>
        <AppHeader>Phonebook</AppHeader>
        <ContactForm onSubmit={this.formSubmitHandler} onAddContact={this.onAddContact} />
        <AppContacts>Contacts</AppContacts>
        <Filter onChange={this.changeFilter} />
        {this.state.contacts.length !== 0 && (
          <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
        )}
      </AppContainer>
    );
  }
}





