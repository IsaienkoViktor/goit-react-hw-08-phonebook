import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'Redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
  );
};
