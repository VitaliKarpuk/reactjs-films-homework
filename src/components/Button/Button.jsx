import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, func, className }) => {
  return (
    <button className={className} onClick={func}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  func: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  title: "",
  func: () => {},
  className: ""
};

export default Button;
