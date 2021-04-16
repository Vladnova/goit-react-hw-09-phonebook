import React from 'react';
// import PropTypes from 'prop-types';
import { onChangeFilter, contactsSelectors } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.filterContacts);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(onChangeFilter(e.target.value));
  };
  return (
    <div className={[styles.containerFilter, 'container'].join(' ')}>
      <label>
        <p className={styles.titleFilter}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          placeholder=" "
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

// Filter.defaultProps = {
//   valueFilter: '',
// };

// Filter.propTypes = {
//   onChangeFilter: PropTypes.func.isRequired,
//   valueFilter: PropTypes.string,
// };

export default Filter;
