/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Film from "../Film/Film";
import { getListFilms, getGenre } from "../../modules/selectors/index";
import requestFilms from "../../modules/actions/requestFilms";

import "./style.scss";

const MovieList = () => {
  const films = useSelector(state => getListFilms(state));
  const genre = useSelector(state => getGenre(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFilms());
  }, []);

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
            testId={"myButton"}
          />
        );
      })}
    </section>
  );
};

export default MovieList;
