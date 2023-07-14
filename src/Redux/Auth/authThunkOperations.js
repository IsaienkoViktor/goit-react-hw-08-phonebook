import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addAuthLogin,
  addAuthLogout,
  addAuthUser,
  setAuthHeader,
} from 'Requests/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const data = await addAuthUser(user);
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
      const data = await addAuthLogin(user);
      console.log(data);
      setAuthHeader(data.token);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await addAuthLogout();
      setAuthHeader(data.token);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchAuthThunk = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAuthThunk();
      setAuthHeader(data.token);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
