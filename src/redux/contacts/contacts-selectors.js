import { createSelector } from '@reduxjs/toolkit';

const allContacts = state => state.contacts.items;

const filterContacts = state => state.contacts.filter;
const itemsLength = state => state.contacts.items.length;

const getVisibleContacts = createSelector(
  [allContacts, filterContacts],
  (contacts, filter) => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalize),
    );
  },
);

export default { allContacts, getVisibleContacts, filterContacts, itemsLength };
