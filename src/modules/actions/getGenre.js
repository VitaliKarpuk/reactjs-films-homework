import { GET_GENRE, API_KEY } from '../constants/constants';

const getGenre = () => async dispatch => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(resp => resp.json())
  dispatch({
    type: GET_GENRE,
    payload: response.genres
  })
}

export default getGenre;