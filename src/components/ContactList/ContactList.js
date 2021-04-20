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

  const onDelete = e => {
    const id = e.target.dataset.id;
    dispatch(contactsOperations.removeContact(id));
  };

  const onEdit = e => {
    const contact = e.target.dataset.contact.split(',');
    const id = contact[0];
    const name = contact[1];
    const number = contact[2];
    dispatch(contactsOperations.saveEditContact(id, name, number));
  };

  return (
    <ul className={[styles.containerList, 'container'].join(' ')}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonIcon
            onClick={onEdit}
            className={styles.IconButtonEdit}
            aria-label="Edit"
            data-contact={[id, name, number]}
          >
            <Edit className={styles.icon} width="25" height="25" />
          </ButtonIcon>
          <ButtonIcon
            onClick={onDelete}
            className={styles.IconButtonDel}
            aria-label="Delete"
            data-id={id}
          >
            <Delete className={styles.icon} width="25" height="25" />
          </ButtonIcon>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
