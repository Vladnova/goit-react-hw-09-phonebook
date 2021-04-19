import React from 'react';
import PropTypes from 'prop-types';

const ButtonIcon = ({ children, onClick, className, ...allyProps }) => (
  <button type="button" className={className} onClick={onClick} {...allyProps}>
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
