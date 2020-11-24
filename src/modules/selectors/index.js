import { createSelector } from 'reselect';

const getListFilms = state => state.films;

const getGenre = state => state.genre;

const getArrTrailer = (state) => state.trailer[0];

export const selectorTrailer = createSelector(
  getArrTrailer,
  state => state?.key
)

export const selectorListFilms = createSelector(
  getListFilms,
  state => state
)

export const selectorGenre = createSelector(
  getGenre,
  state => state
)