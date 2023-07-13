import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Login } from 'Pages/Login';
import { Registration } from 'Pages/Registration';
import { Contacts } from 'Pages/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Registration />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
