import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addAuthLogin,
  addAuthLogout,
  addAuthUser,
  clearAuthHeader,
  fetchAuthUsers,
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
      await addAuthLogout();
      clearAuthHeader('');
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    console.log(token);
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to find user');
    }
    try {
      setAuthHeader(token);
      const data = await fetchAuthUsers();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
