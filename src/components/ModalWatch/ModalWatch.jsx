import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ModalWatch = ({ handleBtnInfo, handleShowrailer, movieListView }) => {
  return (
    <div className="movie-hover">
      <div className="movie-hover__icon" onClick={handleShowrailer}></div>
      <h3>Watch Now</h3>
      {
        movieListView && <button className="btn__info" onClick={handleBtnInfo}>View Info</button>
      }
      
    </div>
  );
};

ModalWatch.propTypes = {
  handleShowrailer: PropTypes.func,
  handleBtnInfo: PropTypes.func,
  movieListView: PropTypes.bool
};

ModalWatch.defaultProps = {
  handleShowrailer: () => {},
  handleBtnInfo: () => {},
  movieListView: true
};

export default ModalWatch;
