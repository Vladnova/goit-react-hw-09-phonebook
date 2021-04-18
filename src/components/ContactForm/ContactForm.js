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

  const edit = () => {
    nameEdit && setName(nameEdit);
    numberEdit && setNumber(numberEdit);
  };

  // useEffect(() => {
  //   nameEdit && setName(nameEdit);
  //   numberEdit && setNumber(numberEdit);
  // }, [nameEdit, numberEdit]);

  const handleNameChange = e => setName(e.currentTarget.value);
  const handleNumberChange = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    const allNames = itemContacts.map(({ name }) => name);

    allNames.includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact({ name, number }));
    resetSubmit();
  };

  const editContact = (idContact, { nameEdit, numberEdit }) => {
    dispatch(
      contactsOperations.editContact(idContact, { nameEdit, numberEdit }),
    );
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

      {nameEdit ? (
        <button
          className={styles.button}
          type="button"
          disabled={!name || !number}
          onClick={editContact}
        >
          Save
        </button>
      ) : (
        <button
          className={styles.button}
          type="submit"
          disabled={!name || !number}
        >
          Add contact
        </button>
      )}
    </form>
  );
};

export default ContactForm;
