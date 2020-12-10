import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../../modules/constants/constants";
import { selectorGenre } from "../../modules/selectors/index";

import "./style.scss";

const Categories = ({ handleMovieListView, movieListView }) => {
  const arrResult = useSelector(selectorGenre);

  return (
    <div className="movie-list__categories">
      <div>
        <ul>
          <li
            // className={activeLink?.length === 1 ? "categories_active-item" : ""}
          >
            <NavLink exact to="/" activeClassName='categories_active-item'>
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink to={`${categories.topRated}`} activeClassName='categories_active-item'>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to={`${categories.comingSoon}`} activeClassName='categories_active-item'>Coming Soon</NavLink>
          </li>
          <li>
            <NavLink to={`/genre`} activeClassName='categories_active-item'>Genre &#8744;</NavLink>
            <ul className="movie-list__categories-genre_list">
              {arrResult.map(item => {
                return (
                  <li key={item.id}>
                    <NavLink to={`${categories.genre}/${item.name}`}>
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <div>
          <div
            className={
              movieListView ? "movie-list__response_active" : "movie-list__response"
            }
            onClick={handleMovieListView}
          >
          </div>
          <div
            className={
              movieListView
                ? "movie-list__no-response_active"
                : "movie-list__no-response"
            }
            onClick={handleMovieListView}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  handleMovieListView: PropTypes.func,
  movieListView: PropTypes.bool
}

Categories.defaultProps = {
  handleMovieListView: () => {},
  movieListView: true
};

export default Categories;
