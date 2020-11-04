import { SEARCH_FILMS, API_KEY } from '../constants/constants';

const searchFilms = (title) => async dispatch => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
  .then(resp => resp.json())

  dispatch({
    type: SEARCH_FILMS,
    payload: response.results
  })
}

export default searchFilms;