import { createAsyncThunk } from '@reduxjs/toolkit';
import { addAuthLogin, addAuthUser, setAuthHeader } from 'Requests/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await addAuthUser(user);
      setAuthHeader(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await addAuthLogin(user);
      setAuthHeader(data.token);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// export const getContactsThunk = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetchContacts();
//       return response;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContacts',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const response = await addContacts(contact);
//       return response;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteContact(id);
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
