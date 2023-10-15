import { GlobalStyles } from './GlobalStyles.styled';
import { BookContactForm } from './AddNewContact/BookContantsForm';
import { ContactList } from './ContactList/ContactList';
import { SearchContact } from './SearchContact/SearchContact';
import { Container } from './container.styled';
import './container.css';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('book-contact')) ?? dateContacts
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('book-contact', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const checkContact = contacts.some(el => {
  //     return el.name.trim() === newContact.name.trim();
  //   });

  //   if (checkContact) {
  //     Notify.failure(`${newContact.name} is already in contacts `);
  //     return;
  //   }

  //   setContacts([...contacts, newContact]);
  // };

  // const searchContact = e => {
  //   setFilter(e.target.value);
  // };

  return (
    <Container>
      <h1 className="title">Book Contact</h1>
      <BookContactForm />
      <SearchContact />
      <ContactList />
      <GlobalStyles></GlobalStyles>
    </Container>
  );
};
