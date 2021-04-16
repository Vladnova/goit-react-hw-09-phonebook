import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { ReactComponent as Delete } from '../../icon/delete.svg';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={[styles.containerList, 'container'].join(' ')}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonIcon
            onClick={() => dispatch(contactsOperations.removeContact(id))}
            aria-label="Delete"
          >
            <Delete width="25" height="25" />
          </ButtonIcon>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
