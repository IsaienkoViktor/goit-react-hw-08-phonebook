import { getContactsThunk } from 'Redux/Contacts/constactsThunkOperations';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Contacts = () => {
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
