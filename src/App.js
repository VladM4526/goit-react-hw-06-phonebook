import { useEffect, useState } from 'react';
import { GlobalStyles } from './GlobalStyles.styled';
import { BookContactForm } from './components/AddNewContact/BookContantsForm';
import { ContactList } from './components/ContactList/ContactList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SearchContact } from './components/SearchContact/SearchContact';
import { Container } from './container.styled';
import './container.css';

export const App = () => {
  const dateContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('book-contact')) ?? dateContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('book-contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const checkContact = contacts.some(el => {
      return el.name.trim() === newContact.name.trim();
    });

    if (checkContact) {
      Notify.failure(`${newContact.name} is already in contacts `);
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const searchContact = e => {
    setFilter(e.target.value);
  };

  const onGetText = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  return (
    <Container>
      <h1 className="title">Book Contact</h1>
      <BookContactForm addNewContact={addContact} />
      <SearchContact search={searchContact} />
      <ContactList
        onGetText={onGetText()}
        onDeleteContact={handleDeleteContact}
      />
      <GlobalStyles></GlobalStyles>
    </Container>
  );
};