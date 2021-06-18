import actionTypes from './contacts-types';

const addContact = ({ id, name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id,
    name,
    number,
  },
});

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const filterContacts = value => ({
  type: actionTypes.FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, filterContacts };

export default actions;
