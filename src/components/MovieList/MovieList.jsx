/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Film from "../Film/Film";
import requestFilmsByGenre from "../../modules/actions/requestFilmsByGenre";
import requesFilms from "../../modules/actions/requestFilms";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import { selectorGenre, selectorListFilms } from '../../modules/selectors'

import "./style.scss";

const MovieList = ({ movieListView }) => {
  const { id: filmGenre, typeSearch } = useParams();
  const dispatch = useDispatch();
  const films = useSelector(selectorListFilms)
  const showListFilms = useSelector(state => state.showListFilms);
  const arrGenre = useSelector(selectorGenre);
  useEffect(() => {
    if (filmGenre && arrGenre) {
      dispatch(requestFilmsByGenre("popular", filmGenre, 1));
    } else {
      dispatch(requesFilms(typeSearch, 1));
    }
  }, [filmGenre, typeSearch, arrGenre]);

  const changeGenre = arr => {
    return arr.reduce((acc, item, index) => {
      arrGenre.forEach(elem => {
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
        <div
          className={
            movieListView
              ? "movie-list__wrapper-items"
              : "movie-list__wrapper-items_active"
          }
        >
          {films.map(film => {
            return (
              <Film
                movieListView={movieListView}
                key={film.id}
                title={film.title}
                overview={film.overview}
                imgUrl={film.poster_path}
                rating={film.vote_average}
                genreFilmArray={film.genre_ids}
                genre={arrGenre}
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
  movieListView: PropTypes.bool
};

MovieList.defaultProps = {
  movieListView: true
};

export default MovieList;
