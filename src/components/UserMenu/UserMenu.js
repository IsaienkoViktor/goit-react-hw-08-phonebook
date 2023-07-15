import { logoutThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/contacts">
        <button type="button" className={s.btn}>
          Contacts
        </button>
      </Link>
      <button
        className={s.btn}
        type="submit"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};
