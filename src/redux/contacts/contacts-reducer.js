import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  patchContactRequest,
  patchContactSuccess,
  patchContactError,
  editContactSuccess,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  onChangeFilter,
} from './contacts-action';

const itemReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [patchContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),

  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const editReducer = createReducer(
  {},
  {
    [editContactSuccess]: (_, { payload }) => payload,
    [patchContactSuccess]: (_, { payload }) => (payload = {}),
  },
);

const filterReducer = createReducer('', {
  [onChangeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [patchContactRequest]: () => true,
  [patchContactSuccess]: () => false,
  [patchContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

export default combineReducers({
  items: itemReducer,
  saveContact: editReducer,
  filter: filterReducer,
  isLoading,
});
