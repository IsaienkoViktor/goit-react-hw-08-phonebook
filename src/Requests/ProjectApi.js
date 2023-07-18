import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet.goit.ua/docs/api',
});

// Get current user info

export const fetchAuthUsers = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const getCurrencyCourse = async () => {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');
  return data;
};

// Create new transaction for logged in user

export const addNewTransaction = async transaction => {
  const { data } = await instance.post('/transactions', transaction);
  return data;
};

// Get all transactions for logged in user

export const getTransaction = async user => {
  const { data } = await instance.get('/transactions', user);
  return data;
};

// Update transaction

export const updateTransaction = async transactionId => {
  const { data } = await instance.post(`/transactions/${transactionId}`);
  return data;
};

// Delete Transaction

export const deleteTransaction = transactionId => {
  instance.delete(`/transactions/${transactionId}`);
};

// Transaction Categories

export const fetchCategories = async () => {
  const { data } = await instance.get('/transaction-categories');
  return data;
};

// Auth Controller

// Sign up new user

export const addContacts = async user => {
  const { data } = await instance.post('/auth/sign-up', user);
  return data;
};

// Sign in existing user

export const editContacts = async user => {
  const { data } = await instance.post(`/auth/sign-in`, user);
  return data;
};

// Sign out existing user

export const deleteContact = id => instance.delete(`/auth/sign-out/${id}`);

// Get transactions summary for period

export const fetchTransactionsSummary = async () => {
  const { data } = await instance.get('/api/transactions-summary');
  return data;
};

// Set token

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

// https://wallet.goit.ua/docs/api/
