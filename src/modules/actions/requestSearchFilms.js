import { SEARCH_FILMS, API_KEY, BASE_URL, categories } from '../constants/constants';


const searchFilms = (results) => ({
  type: SEARCH_FILMS,
  payload: results
})

const requestSearchFilms = (title) => {
  return async dispatch => {
    const response = await fetch(`${BASE_URL}${categories.search}/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
      .then(resp => resp.json())
    dispatch(searchFilms(response.results))
  }
}

export default requestSearchFilms;