import React from 'react';

export const Registration = () => {
  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      [name.name]: name.value,
      [email.name]: email.value,
      [password.name]: password.value,
    };
    e.target.reset();
  };
  return (
    <form on submit={onSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Register</button>
    </form>
  );
};
