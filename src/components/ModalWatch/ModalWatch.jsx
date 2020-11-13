import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ModalWatch = ({ handleBtnInfo, handleShowrailer }) => {
  return (
    <div className="movie-hover">
      <div className="movie-hover__icon" onClick={handleShowrailer}></div>
      <h3>Watch Now</h3>
      <button className="btn__info" onClick={handleBtnInfo}>View Info</button>
    </div>
  );
};

ModalWatch.propTypes = {
  handleShowrailer: PropTypes.func,
  handleBtnInfo: PropTypes.func
};

ModalWatch.defaultProps = {
  handleShowrailer: () => {},
  handleBtnInfo: () => {}
};

export default ModalWatch;
