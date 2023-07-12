import { selectContacts } from 'Redux/selectors';
import s from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'Redux/thunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const mapContact = { name: setName, number: setNumber };

  const onChange = ({ target }) => {
    mapContact[target.name](target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExsist = contacts.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert('Name already exsist!');
      return;
    }
    dispatch(addContactThunk({ name, number })).unwrap().then(console.log);
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="John Smith"
          value={name}
          onChange={onChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          placeholder="111-11-11"
          value={number}
          onChange={onChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
