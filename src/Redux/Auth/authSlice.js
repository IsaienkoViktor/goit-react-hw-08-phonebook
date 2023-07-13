import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAuthThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './authThunkOperations';

const authSliced = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoggedIn = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoggedIn = false;
      })
      .addCase(registerThunk.pending, state => {
        state.isRefreshing = true; /*!!!!*/
      })
      .addCase(loginThunk.pending, state => {
        state.isRefreshing = true; /*!!!!*/
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logoutThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchAuthThunk.fulfilled, (state, { payload }) => {
        state.user = [...state.user, payload];
        state.token = payload.token;
      }),
});

export const authSlice = authSliced.reducer;
