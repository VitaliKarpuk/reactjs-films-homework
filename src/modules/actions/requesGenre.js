import { GET_GENRE, API_KEY, BASE_URL, categories } from '../constants/constants';


const getGenre = (genres) => ({
  type: GET_GENRE,
  payload: genres
})

const requesGenre = () => {
  return async dispatch => {
    const response = await fetch(`${BASE_URL}${categories.genre}/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(resp => resp.json())
    dispatch(getGenre(response.genres))
    localStorage.setItem('genre', JSON.stringify(response.genres))
  }
}

export default requesGenre;