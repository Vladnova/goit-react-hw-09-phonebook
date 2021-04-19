import React from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { ReactComponent as Delete } from '../../icon/delete.svg';
import { ReactComponent as Edit } from '../../icon/pencil.svg';
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
            onClick={() =>
              dispatch(contactsOperations.saveEditContact(id, name, number))
            }
            className={styles.IconButtonEdit}
            aria-label="Edit"
          >
            <Edit width="25" height="25" />
          </ButtonIcon>
          <ButtonIcon
            onClick={() => dispatch(contactsOperations.removeContact(id))}
            className={styles.IconButtonDel}
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
