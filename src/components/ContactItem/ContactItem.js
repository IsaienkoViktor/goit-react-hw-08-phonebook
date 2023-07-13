import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'Redux/Contacts/constactsThunkOperations';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <li className={s.item} key={id}>
      <span className={s.info}>{name}:</span>
      <span className={s.info}>{number}</span>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
