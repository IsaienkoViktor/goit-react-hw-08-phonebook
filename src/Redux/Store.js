import { configureStore } from '@reduxjs/toolkit';
import { contactSlice, filterSlice } from './Contacts/contactsSlice';
import { authSlice } from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    auth: authSlice,
    filter: filterSlice,
  },
});
