import actionTypes from './contacts-types';

export const addContact = ({ id, name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id,
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: {
    id,
  },
});

export const filterContacts = value => ({
  type: actionTypes.FILTER,
  payload: value,
});
