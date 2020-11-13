import { GET_FILMS, API_KEY } from '../constants/constants';
import getGenre from './getGenre';

const getFilms = () => {
  return async (dispatch) => {
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(data => dispatch({
        type: GET_FILMS,
        payload: data.results
      }))
      .then(() => {
        dispatch(getGenre())
      })
  }
}

export default getFilms;