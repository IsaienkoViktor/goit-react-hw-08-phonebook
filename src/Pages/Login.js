import { loginThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    dispatch(loginThunk(user));
    e.target.reset();
  };
  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <label className={s.label}>
          <input className={s.input} type="email" name="email" required />
          <input className={s.input} type="password" name="password" required />
        </label>
        <button className={s.btn} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
