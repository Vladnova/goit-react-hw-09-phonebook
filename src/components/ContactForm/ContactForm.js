import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const itemContacts = useSelector(contactsSelectors.allContacts);
  const nameEdit = useSelector(contactsSelectors.getEditName);
  const numberEdit = useSelector(contactsSelectors.getEditNumber);
  const idContact = useSelector(contactsSelectors.id);
  const dispatch = useDispatch();

  useEffect(() => {
    nameEdit && setName(nameEdit);
    numberEdit && setNumber(numberEdit);
  }, [nameEdit, numberEdit]);

  const handleNameChange = e => setName(e.currentTarget.value);
  const handleNumberChange = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!!idContact) {
      dispatch(contactsOperations.editContact(idContact, { name, number }));
      resetSubmit();
      return;
    }
    const allNames = itemContacts.map(({ name }) => name);

    allNames.includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact({ name, number }));
    resetSubmit();
  };

  const resetSubmit = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={[styles.form, 'container'].join(' ')}
      onSubmit={handleSubmit}
    >
      <label>
        <p className={styles.label}>Name</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder=" "
          onChange={handleNameChange}
        />
      </label>

      <label>
        <p className={styles.label}> Number</p>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          placeholder=" "
          onChange={handleNumberChange}
        />
      </label>
      <button
        className={styles.button}
        type="submit"
        disabled={!name || !number}
      >
        {!!idContact ? 'Save' : 'Add contact'}
      </button>
    </form>
  );
};

export default ContactForm;
