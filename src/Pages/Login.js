import { loginThunk } from 'Redux/Auth/authThunkOperations';
import React from 'react';
import { useDispatch } from 'react-redux';
import s from './Login.module.css';
import Container from 'components/Container/Container';

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
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Enter your email"
            equired
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
            Login
          </button>
        </Container>
      </form>
    </>
  );
};

// import React from 'react';
// import propTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
// import { Navigate } from 'react-router';

// export const PublicRoute = ({ children, redirrectTo }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   console.log('PublicRoute is logged in', isLoggedIn);
//   return isLoggedIn ? <Navigate to={redirrectTo} /> : children;
// };

// PublicRoute.propTypes = { children: propTypes.node };
