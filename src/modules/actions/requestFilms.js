import { GET_FILMS, API_KEY, BASE_URL } from '../constants/constants';
import showListFilms from './showListFilms';

const getFilms = (results) => ({
  type: GET_FILMS,
  payload: results
})

const requesFilms= (typeSearch, page) => {
  return async dispatch => {
    dispatch(showListFilms(false))
    const response = await fetch(`${BASE_URL}/movie/${typeSearch ?? 'popular'}?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(resp => resp.json())
    dispatch(getFilms(response.results));
    dispatch(showListFilms(true))
  }
}

export default requesFilms;