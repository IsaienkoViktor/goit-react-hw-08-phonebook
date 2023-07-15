import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Login } from 'Pages/Login';
import { Registration } from 'Pages/Registration';
import { Contacts } from 'Pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'Redux/Auth/authThunkOperations';
import { RestrictedRoute } from 'hoc/RestrictedRoute';
import { selectIsRefreshing } from 'Redux/selectors';
import { PrivatRoute } from 'hoc/PrivatRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log('is', isRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user ... </p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="register"
          element={
            <RestrictedRoute
              restrictedTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivatRoute restrictedTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute restrictedTo="/contacts" component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};
