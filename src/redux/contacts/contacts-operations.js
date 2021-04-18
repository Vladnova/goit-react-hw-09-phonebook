import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-action';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContact = stateForm => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', stateForm)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const editContact = (id, body) => dispatch => {
  console.log(body);
  dispatch(editContactRequest());
  axios
    .patch(`/contacts/${id}`, body)
    .then(({ data }) => dispatch(editContactSuccess(data)))
    .catch(error => dispatch(editContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};

export default { addContact, removeContact, fetchContacts, editContact };
