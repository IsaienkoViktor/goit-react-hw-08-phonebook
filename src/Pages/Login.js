import { loginThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={onSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
};
