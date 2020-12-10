import { GET_FILMS, API_KEY, BASE_URL } from '../constants/constants';
import showListFilms from './showListFilms';

const getFilms = (results) => ({
  type: GET_FILMS,
  payload: results
})

const findId = (genres, genreFilm) => {
  const result = genres.filter(item => item.name === genreFilm)
  return result[0]?.id;
}

const sortFilmsByGenre = (arrFilms, id) => arrFilms.filter(item => item.genre_ids.includes(id));

const requestFilmsByGenre = (typeSearch, filmGenre, page) => {
  let arr = [];
  return async (dispatch, getState) => {
    const id = findId(getState().genre, filmGenre);
    dispatch(showListFilms(false))
    while (arr.length < 16) {
      await fetch(`${BASE_URL}/movie/${typeSearch}?api_key=${API_KEY}&language=en-US&page=${page++}`)
        .then(resp => resp.json())
        .then(data => {
          const films = data.results;
          const movies = sortFilmsByGenre(films, id)
          arr = [...arr, ...movies];
          return arr;
        })
        .then(data => {
          if (data.length > 15) {
            dispatch(getFilms(data.slice(0, 16)))
          }
        })
    }
    arr = []
    dispatch(showListFilms(true))
  }
}

export default requestFilmsByGenre;