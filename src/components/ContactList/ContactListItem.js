import { Title, DescribeText, ButtonDelete } from "./ContactListStyles.styled";
import "./ContactListStyles.css";
import propTypes from 'prop-types';

export const ContactListItem = ({ item: { number, name }, onDeleteContact }) => {
    return (
        <li>
            <Title>{name}</Title>
            <DescribeText>Phone number: {number}</DescribeText>
            <ButtonDelete className="button-delete" type="button" onClick={onDeleteContact}>Delete</ButtonDelete>
        </li>
    )
}

ContactListItem.propTypes = {
    onDeleteContact: propTypes.func,
    item: propTypes.shape ({
    number: propTypes.string,
    name: propTypes.string,
    id: propTypes.string
  })
}