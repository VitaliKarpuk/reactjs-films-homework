import { GET_FILMS, API_KEY, BASE_URL, categories } from '../constants/constants';
import requesGenre from './requesGenre';

const getFilms = (results) => ({
  type: GET_FILMS,
  payload: results
})

const requestFilms = () => {
  return async (dispatch) => {
    await fetch(`${BASE_URL}/movie/${categories.popular}?api_key=${API_KEY}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(data => dispatch(getFilms(data.results)))
      .then(() => {
        dispatch(requesGenre())
      })
  }
}

export default requestFilms;