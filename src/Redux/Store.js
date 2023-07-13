import { configureStore } from '@reduxjs/toolkit';
import { contactSlice, filterSlice } from './Contacts/contactsSlice';
import { authSlice } from './Auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    auth: persistedReducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
