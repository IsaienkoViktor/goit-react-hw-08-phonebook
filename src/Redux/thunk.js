import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContact, fetchContacts } from 'Requests/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await addContacts(contact);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
