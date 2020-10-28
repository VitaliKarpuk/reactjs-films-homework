import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Btn = ({ title, className }) => {

  return (
    <button className={className}>{title}</button>
  )
}


Btn.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
}

export default Btn;