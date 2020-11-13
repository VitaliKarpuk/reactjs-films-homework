import React from "react";
import PropTypes from "prop-types";
import ModalTrailer from "../ModalTrailer/ModalTrailer";

import "./style.scss";

const ModalInfoFilm = ({
  title,
  rating,
  genreFilm,
  overview,
  handleCloseInfo,
  handleShowrailer
}) => {
  return (
    <div className="movie-info">
      <div className="movie-info__close" onClick={handleCloseInfo}></div>
      <div className="movie-info__rating">
        <h3>{title}</h3>
        <span>{rating}</span>
      </div>
      <p className="movie-info__genre">
        {genreFilm &&
          genreFilm.map((item, index) =>
            genreFilm[index + 1] ? `${item}, ` : `${item}`
          )}
      </p>
      <p>{overview}</p>
      <button className="btn__watch" onClick={handleShowrailer}>Watch Now</button>
    </div>
  );
};

ModalInfoFilm.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genreFilm: PropTypes.array,
  overview: PropTypes.string,
  handleCloseInfo: PropTypes.func,
  handleShowrailer: PropTypes.func
};

ModalInfoFilm.defaultProps = {
  rating: 0,
  genreFilm: [],
  overview: "",
  handleCloseInfo: () => {},
  handleShowrailer: () =>{}
};

export default ModalInfoFilm;
