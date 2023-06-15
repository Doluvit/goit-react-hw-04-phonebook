import PropTypes from 'prop-types';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsBtn,
} from './contactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsContainer>
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsText>{name}: </ContactsText>
              <ContactsText>{number}</ContactsText>
              <ContactsBtn type="button" onClick={() => deleteContact(id)}>
                Delete
              </ContactsBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </ContactsContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
