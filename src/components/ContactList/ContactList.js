import { ContactListItem } from "./ContactListItem";
import { ContactListContainer } from "./ContactListStyles.styled";
import propTypes from 'prop-types';

export const ContactList = (props) => {
    return (
        <ContactListContainer>
            {props.onGetText.map(items => (
                <ContactListItem onDeleteContact={() => props.onDeleteContact(items.id)} item={items} key={items.id} />
            ))}
        </ContactListContainer>
 
    )
}

ContactList.propTypes = {
    onDeleteContact: propTypes.func,
    onGetText: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        number: propTypes.string
    })).isRequired
 }