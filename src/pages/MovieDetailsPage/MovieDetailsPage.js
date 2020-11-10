import React from 'react';
import Stars from '../../components/Stars/Stars';
import Btn from '../../components/Btn/Btn';
import ModalInfo from '../../components/ModalInfo/ModalInfo';

import './style.scss';


const MovieDetailsPage = () => {
  return (
    <div className="movie-details">
      <header className='header'>
        <h1>FILMS</h1>
        <div className="header__search">
          <input type="text" placeholder="the jungle book" />
          <span className='header__search-icon'></span>
        </div>
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
          <Btn title='Watch Now' className="btn__watch"/>
          <Btn title='View Info' className="btn__info"/>
        </div>

      </div>
    </div>
  )
}

export default MovieDetailsPage;