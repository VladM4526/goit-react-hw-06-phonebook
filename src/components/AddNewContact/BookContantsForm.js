import { useState } from "react";
import { nanoid } from 'nanoid';
import { MdPermIdentity } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { Form, FormInput, FormButton } from "./BookContantsFormStyles.styled";
import "./BookContactFormStyles.css";

export const BookContactForm = ({ addNewContact }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const changeInput = (e) => {
        switch (e.target.name) {
            case "name":
                return setName(e.currentTarget.value)
            case "number":
                return setNumber(e.currentTarget.value)
            default:
                break;
        }
    }

    const addInList = (e) => {
        e.preventDefault();
        addNewContact({ id: nanoid(5), name, number });
        setName("");
        setNumber("");
    }

        return (
            <div>
                <Form onSubmit={addInList}>
                    <label>
                        <div className="form-input">
                            <MdPermIdentity className="form-input-icon" />
                            <FormInput type="text" name="name" onChange={changeInput}
                            pattern= "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            value={name}
                            required
                            placeholder="Name"
                            />
                        </div>
                    </label>
                    <label>
                        <div className="form-input">
                            <MdOutlinePhone className="form-input-icon" />
                            <FormInput type="tel" name="number" onChange={changeInput}
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            value={number}
                            required
                            placeholder="Phone"
                            />
                        </div>
                        
                    </label>
                    <FormButton type="submit">Add</FormButton>
                </Form>
            </div>
        )
    }