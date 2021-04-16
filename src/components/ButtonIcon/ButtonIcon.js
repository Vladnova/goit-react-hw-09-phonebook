import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

ButtonIcon.defaultProps = {
  onClick: null,
  children: null,
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default ButtonIcon;
