import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/signup', user);
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
