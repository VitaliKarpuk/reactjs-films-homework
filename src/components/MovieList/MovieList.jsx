/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Film from "../Film/Film";

import "./style.scss";

const MovieList = ({ films, onGetilms, genre }) => {
  useEffect(() => {
    onGetilms();
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
      {films &&
        films.map(film => {
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

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onGetilms: PropTypes.func,
  genre: PropTypes.array
};

MovieList.defaultProps = {
  onGetilms: () => {},
  genre: []
};

export default MovieList;
