import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../../modules/constants/constants";
import { selectorGenre } from "../../modules/selectors/index";

import "./style.scss";

const Categories = ({ handleMovieListView, movieListView }) => {
  const [activeLink, setActiveLink] = useState("Trending");
  const arrResult = useSelector(state => selectorGenre(state));
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setActiveLink(location.pathname);
    }
  }, [location]);


  return (
    <div className="movie-list__categories">
      <div>
        <ul>
          <li
            className={activeLink?.length === 1 ? "categories_active-item" : ""}
          >
            <NavLink exact to="/">
              Trending
            </NavLink>
          </li>
          <li
            className={
              activeLink?.includes("rated") ? "categories_active-item" : ""
            }
          >
            <NavLink to={`${categories.topRated}`}>Top Rated</NavLink>
          </li>
          <li
            className={
              activeLink?.includes("coming") ? "categories_active-item" : ""
            }
          >
            <NavLink to={`${categories.comingSoon}`}>Coming Soon</NavLink>
          </li>
          <li
            className={
              activeLink?.includes("genre")
                ? "movie-list__categories-genre categories_active-item"
                : "movie-list__categories-genre"
            }
          >
            <span>Genre &#8744;</span>
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
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={
              movieListView
                ? "movie-list__no-response_active"
                : "movie-list__no-response"
            }
            onClick={handleMovieListView}
          >
            <span></span>
            <span></span>
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
