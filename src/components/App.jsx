import { useEffect, useState } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { FormHeader, MainContainer } from './App.styled';

const contactsArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsArr
  );
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = data => {
    setContacts(prev =>
      prev.find(contact => contact.name === data.name)
        ? alert(`${data.name} is already in contacts`)
        : [data, ...prev]
    );
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const onFilter = event => {
    const { value } = event.currentTarget;
    setFiltered(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <MainContainer>
      <FormHeader>Phonebook</FormHeader>
      <ContactForm onSubmit={handleSubmit} />

      <FormHeader>Contacts</FormHeader>
      <Filter value={filtered} onFilter={onFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </MainContainer>
  );
};

export default App;
