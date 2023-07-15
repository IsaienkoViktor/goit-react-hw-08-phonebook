import { registerThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './Registration.module.css';
import Container from 'components/Container/Container';

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
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </label>
      <Container>
        <button className={s.btn} type="submit">
          Register
        </button>
      </Container>
    </form>
  );
};
