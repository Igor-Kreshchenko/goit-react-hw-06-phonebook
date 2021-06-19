import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ id, name, number }) => ({
  payload: {
    id,
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const filterContacts = createAction('contacts/filter');

const actions = { addContact, deleteContact, filterContacts };

export default actions;
