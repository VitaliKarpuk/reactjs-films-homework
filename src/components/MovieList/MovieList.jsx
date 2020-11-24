/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Film from "../Film/Film";
import requestFilmsByGenre from "../../modules/actions/requestFilmsByGenre";
import requesFilms from "../../modules/actions/requestFilms";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";

import "./style.scss";

const MovieList = ({ films, genre }) => {
  const { id: filmGenre, typeSearch } = useParams();
  const dispatch = useDispatch();
  const showListFilms = useSelector(state => state.showListFilms);
  const arrGenre = useSelector(state => state.genre);

  useEffect(() => {
    if (filmGenre && arrGenre && !showListFilms) {
      dispatch(requestFilmsByGenre("popular", filmGenre, 1));
    } else {
      dispatch(requesFilms(typeSearch, 1));
    }
  }, [filmGenre, typeSearch, arrGenre]);

  const changeGenre = arr => {
    return arr.reduce((acc, item, index) => {
      genre.forEach(elem => {
        if (elem.id === item) {
          acc[index] = elem.name;
        }
      });
      return acc;
    }, []);
  };

  return (
    <section className="movie-list">
      {!showListFilms ? (
        <Loading />
      ) : (
        <div className="movie-list__wrapper-items">
          {films.map(film => {
            return (
              <Film
                key={film.id}
                title={film.title}
                overview={film.overview}
                imgUrl={film.poster_path}
                rating={film.vote_average}
                genreFilmArray={film.genre_ids}
                genre={genre}
                changeGenre={changeGenre}
                id={film.id}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

MovieList.propTypes = {
  films: PropTypes.array,
  genre: PropTypes.array
};

MovieList.defaultProps = {
  films: [],
  genre: []
};

export default MovieList;
