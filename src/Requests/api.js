import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setAuthHeader = token => {
  usersApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  usersApi.defaults.headers.common.Authorization = '';
};

export const addAuthUser = async user => {
  const { data } = await usersApi.post('/users/signup', user);
  return data;
};

export const addAuthLogin = async user => {
  const { data } = await usersApi.post('/users/login', user);
  return data;
};

export const addAuthLogout = async user => {
  const { data } = await usersApi.post('/users/logout', user);
  return data;
};

export const fetchAuthUsers = async () => {
  const { data } = await usersApi.get('/users/current');
  return data;
};

export const fetchContacts = async () => {
  const { data } = await usersApi.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await usersApi.post('/contacts', contact);
  return data;
};

export const deleteContact = id => usersApi.delete(`/contacts/${id}`);

export const editContacts = async id => {
  const { data } = await usersApi.patch(`/contacts/${id}`);
  return data;
};
