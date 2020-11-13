import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ModalWatch from "../ModalWatch/ModalWatch";
import ModalInfoFilm from "../ModalInfoFilm/ModalInfoFilm";
import ModalTrailer from "../ModalTrailer/ModalTrailer";

import "./style.scss";

const Film = ({
  title,
  overview,
  imgUrl,
  rating,
  genreFilmArray,
  changeGenre,
  genre
}) => {
  const [showInfoFilm, setShowInfoFilm] = useState(false);
  const [genreFilm, setGenreFilm] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (genreFilmArray && genre.length > 0) {
      setGenreFilm(changeGenre(genreFilmArray));
    }
  }, [genreFilmArray, genre]);

  const toggleInfoModal = () => setShowInfoFilm(showInfoFilm => !showInfoFilm);

  const toggleTrailerModal = () => setShowTrailer(showTrailer => !showTrailer);

  return (
    <div className="movie-list__item">
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
      {showInfoFilm ? (
        <ModalInfoFilm
          title={title}
          rating={rating}
          genreFilm={genreFilm}
          overview={overview}
          handleCloseInfo={toggleInfoModal}
          handleShowrailer={toggleTrailerModal}
        />
      ) : (
        <ModalWatch
          handleBtnInfo={toggleInfoModal}
          handleShowrailer={toggleTrailerModal}
          showTrailer={showTrailer}
        />
      )}
      {showTrailer && (
        <ModalTrailer
          className={"btn__info"}
          title={title}
          showTrailer={showTrailer}
          handleCloseTrailer={toggleTrailerModal}
        />
      )}
    </div>
  );
};

Film.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  imgUrl: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number,
  genreFilmArray: PropTypes.array.isRequired,
  genre: PropTypes.array,
  changeGenre: PropTypes.func
};

Film.defaultProps = {
  title: "",
  overview: "",
  imgUrl: "",
  rating: 0,
  id: Math.random(),
  genre: [],
  changeGenre: () => {}
};

export default Film;
