import { selectIsLogged } from 'Redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import s from './Loyout.module.css';
import Container from 'components/Container/Container';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <>
      <header className={s.header}>
        <Container>
          <nav className={s.nav}>
            <Link to="/">
              <button type="button" className={s.btn}>
                Home
              </button>
            </Link>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/login">
                  <button type="button" className={s.btn}>
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button type="button" className={s.btn}>
                    Register
                  </button>
                </Link>
              </>
            )}
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
