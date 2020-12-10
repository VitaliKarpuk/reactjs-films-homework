import { GET_TRAILER, BASE_URL, API_KEY } from '../constants/constants';

const getTrailer = (trailer) => ({
  type: GET_TRAILER,
  payload: trailer
})

const requesTrailer = (id) => {
  return async dispatch => {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(resp => resp.json())
    dispatch(getTrailer(response.results))
  }
}

export default requesTrailer;