import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ModalWatch from "../ModalWatch/ModalWatch";
import ModalInfoFilm from "../ModalInfoFilm/ModalInfoFilm";

import "./style.scss";

const Film = ({
  title,
  overview,
  imgUrl,
  rating,
  id,
  genreFilmArray,
  changeGenre,
  genre
}) => {
  const [showInfoFilm, setShowInfoFilm] = useState(false);
  const [genreFilm, setGenreFilm] = useState([]);

  useEffect(() => {
    if (genreFilmArray && genre.length > 0) {
      setGenreFilm(changeGenre(genreFilmArray));
    }
  }, [genreFilmArray, genre]);

  const handleBtnInfo = () => {
    setShowInfoFilm(true);
  };

  const handleCloseInfo = () => {
    setShowInfoFilm(false);
  }

  return (
    <div className="movie-list__item" key={id}>
      {imgUrl ? (
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${imgUrl}`}
          alt={`${title}`}
        />
      ) : (
        <div className="movie-list__item_img">{title}</div>
      )}

      <div className="movie-list__rating">
        <h3>{title}</h3>
        <span>{rating}</span>
      </div>
      <p className="movie-list__genre">
        {genreFilm &&
          genreFilm.map((item, index) =>
            genreFilm[index + 1] ? `${item}, ` : `${item}`
          )}
      </p>
      {showInfoFilm && (
        <ModalInfoFilm
          title={title}
          rating={rating}
          genreFilm={genreFilm}
          overview={overview}
          handleCloseInfo={handleCloseInfo}
        />
      )}
      {!showInfoFilm && <ModalWatch handleBtnInfo={handleBtnInfo} />}
    </div>
  );
};

Film.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  imgUrl: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number,
  genreFilmArray: PropTypes.array,
  genre: PropTypes.array,
  changeGenre: PropTypes.func
};

export default Film;
