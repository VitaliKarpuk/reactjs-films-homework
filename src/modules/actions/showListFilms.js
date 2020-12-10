import { SHOW_LIST_FILMS } from '../constants/constants';

const showListFilms = (show) => {
  return dispatch => {
    dispatch({
      type: SHOW_LIST_FILMS,
      payload: show
    })
  }
}

export default showListFilms;