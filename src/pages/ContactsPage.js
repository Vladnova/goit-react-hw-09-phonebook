import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import styles from '../App.module.css';
import Container from '../components/Container';

const ContactsPage = () => {
  const itemsLength = useSelector(contactsSelectors.itemsLength);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      {itemsLength !== 0 && (
        <Container>
          <h2 className={styles.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      )}
    </>
  );
};

export default ContactsPage;
