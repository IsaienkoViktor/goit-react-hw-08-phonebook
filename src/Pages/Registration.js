import { registerThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './Registration.module.css';

export const Registration = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      [name.name]: name.value,
      [email.name]: email.value,
      [password.name]: password.value,
    };
    dispatch(registerThunk(user));
    e.target.reset();
  };
  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.label}>
        <input className={s.input} type="text" name="name" required />
        <input className={s.input} type="email" name="email" required />
        <input className={s.input} type="password" name="password" required />
      </label>
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
};
