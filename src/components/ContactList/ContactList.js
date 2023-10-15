import { ContactListItem } from './ContactListItem';
import { ContactListContainer } from './ContactListStyles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const search = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onGetText = () => {
    const normalizedFilter = search.toLowerCase().trim();
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };
  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListContainer>
      {onGetText().map(items => (
        <ContactListItem
          onDeleteContact={() => deleteContacts(items.id)}
          item={items}
          key={items.id}
        />
      ))}
    </ContactListContainer>
  );
};
