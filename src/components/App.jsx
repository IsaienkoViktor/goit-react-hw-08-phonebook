import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import Container from './Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'Redux/thunk';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </Container>
    </>
  );
};
