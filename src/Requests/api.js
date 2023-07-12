import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://64ac076b9edb4181202f00e9.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await usersApi.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await usersApi.post('/contacts', contact);
  return data;
};

export const deleteContact = id => usersApi.delete(`/contacts/${id}`);

// GET
// /users/:id

// POST
// /users

// PUT
// /users/:id

// DELETE
// /users/:id
