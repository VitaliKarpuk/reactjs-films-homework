import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Btn = ({ title, className, onClick }) => {

  return (
    <button className={className} onClick={onClick}>{title}</button>
  )
}

Btn.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Btn;