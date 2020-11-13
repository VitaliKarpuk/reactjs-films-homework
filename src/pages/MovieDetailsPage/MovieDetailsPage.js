import React from 'react';
import Stars from '../../components/Stars/Stars';
import ModalInfo from '../../components/ModalInfo/ModalInfo';
import SearchInputContainer from '../../conteiners/SearchInputContainer';

import './style.scss';

const MovieDetailsPage = () => {
  return (
    <div className="movie-details">
      <header className='header'>
        <h1>FILMS</h1>
        <SearchInputContainer />
      </header>
      <div className="movie-details__content">
        <div className="movie-details__title">
          <h2>THE JUNGLE BOOK</h2>
          <ul className="movie-details__genre">
            <li>Adventure</li>
            <li>Drama</li>
            <li>Family</li>
            <li>Fantasy</li>
            <li>1h 46m</li>
          </ul>
          <Stars />
        </div>
        <div className="movie-details__buttons">
          <ModalInfo />
          <button className="btn__watch">Watch Now</button>
          <button className="btn__info">View Info</button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage;