import { configureStore } from '@reduxjs/toolkit';
import { contactSlice, filterSlice } from './createSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  },
});
