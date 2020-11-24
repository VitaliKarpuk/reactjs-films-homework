import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from '../../modules/constants/constants';
import {
  selectorGenre,
  selectorListFilms
} from "../../modules/selectors/index";

import "./style.scss";

const Categories = () => {
  const arrResult = useSelector(state => [
    selectorGenre(state),
    selectorListFilms(state)
  ]);
  console.log(arrResult);

  return (
    <div className="movie-list__categories">
      <div>
        <ul>
          <li className="movie-list__categories_active-item">
            <NavLink to="/">Trending</NavLink>
          </li>
          <li>
            <NavLink to={`${categories.topRated}`}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to={`${categories.comingSoon}`}>Coming Soon</NavLink>
          </li>
          <li className="movie-list__categories-genre">
            <span>Genre &#8744;</span>
            <ul className="movie-list__categories-genre_list">
              {arrResult[0].map(item => {
                return (
                  <li key={item.id} >
                    <NavLink to={`${categories.genre}/${item.name}`}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <div>
          <div className="movie-list__categories_four-items">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="movie-list__categories_two-items">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
