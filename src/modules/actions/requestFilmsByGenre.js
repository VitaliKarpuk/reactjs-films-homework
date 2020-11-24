import { GET_FILMS, API_KEY, BASE_URL } from '../constants/constants';
import showListFilms from './showListFilms';

let arr = [];

const getFilms = (results) => ({
  type: GET_FILMS,
  payload: results
})

const findId = (genres, genreFilm) => {
  const result = genres.filter(item => item.name === genreFilm)
  return result[0]?.id;
}

const sortFilmsByGenre = (arrFilms, id) => {
  const arrRes = arrFilms.filter(item => item.genre_ids.includes(id));
  arr = arr.concat(...arrRes);
};

const requestFilmsByGenre = (typeSearch, filmGenre, page) => {
  return async (dispatch, getState) => {
    const id = findId(getState().genre, filmGenre);
    console.log(getState());
    dispatch(showListFilms())
    while (arr.length < 16) {
      await fetch(`${BASE_URL}/movie/${typeSearch}?api_key=${API_KEY}&language=en-US&page=${page++}`)
        .then(resp => resp.json())
        .then(data => {
          const films = data.results;
          sortFilmsByGenre(films, id)
          return arr;
        })
        .then(data => {
          if (data.length > 15) {
            dispatch(getFilms(data.slice(0, 16)))
          }
        })
    }
    arr = []
    dispatch(showListFilms())
  }
}

export default requestFilmsByGenre;