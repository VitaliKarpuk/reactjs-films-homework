import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ModalWatch from "../ModalWatch/ModalWatch";
import ModalInfoFilm from "../ModalInfoFilm/ModalInfoFilm";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import requesTrailer from "../../modules/actions/requesTrailer";
import { selectorTrailer } from "../../modules/selectors/index";

import "./style.scss";

const Film = ({
  title,
  overview,
  imgUrl,
  rating,
  genreFilmArray,
  changeGenre,
  genre,
  id,
  movieListView
}) => {
  const [showInfoFilm, setShowInfoFilm] = useState(false);
  const [genreFilm, setGenreFilm] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const trailer = useSelector(state => selectorTrailer(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (genreFilmArray && genre.length > 0) {
      setGenreFilm(changeGenre(genreFilmArray));
    }
  }, [genreFilmArray, genre]);

  const toggleInfoModal = () => setShowInfoFilm(showInfoFilm => !showInfoFilm);

  const toggleTrailerModal = () => {
    !showTrailer && dispatch(requesTrailer(id));
    setShowTrailer(showTrailer => !showTrailer);
  };

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
      <div className="wrapper__rating">
        <div className="movie-list__rating">
          <h3>{title}</h3>
          <span>{rating}</span>
        </div>
        <p className="movie-list__genre">
          {genreFilm.map((item, index) =>
            genreFilm[index + 1] ? `${item}, ` : `${item}`
          )}
        </p>
        {!movieListView && <p className="movie-list__overview">{overview}</p>}
      </div>

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
          movieListView={movieListView}
        />
      )}
      {showTrailer && (
        <ModalTrailer
          className={"btn__info"}
          title={title}
          showTrailer={showTrailer}
          handleCloseTrailer={toggleTrailerModal}
          trailer={trailer}
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
  changeGenre: PropTypes.func,
  movieListView: PropTypes.bool
};

Film.defaultProps = {
  title: "",
  overview: "",
  imgUrl: "",
  rating: 0,
  id: Math.random(),
  genre: [],
  changeGenre: () => {},
  movieListView: true
};

export default Film;
