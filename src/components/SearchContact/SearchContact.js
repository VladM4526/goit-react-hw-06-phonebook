import { MdSearch } from "react-icons/md";
import { SearchContainer, SearchInput } from "./SearchContactStyles.styled";
import "./SearchContactStyles.css";
import propTypes from 'prop-types';

export const SearchContact = (props) => {
    const { search } = props;

    return (
        <SearchContainer className="search-container">
            <MdSearch className="search-icon" />
            <SearchInput type="text" onChange={search} placeholder="Search Contact" />
        </SearchContainer>
    )
}

export default SearchContact;

SearchContact.propTypes = {
    searchContact: propTypes.func,
}