import { registerThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={onSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Register</button>
    </form>
  );
};
