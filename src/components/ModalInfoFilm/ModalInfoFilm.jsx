import React from "react";
import PropTypes from "prop-types";
import ModalTrailer from '../ModalTrailer/ModalTrailer';

import "./style.scss";

const ModalInfoFilm = ({ title, rating, genreFilm, overview, handleCloseInfo }) => {
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
      <ModalTrailer className={"btn__watch"} title={"Watch Now"} />
    </div>
  );
};

ModalInfoFilm.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  genreFilm: PropTypes.array,
  overview: PropTypes.string,
  handleCloseInfo: PropTypes.func
};

export default ModalInfoFilm;
