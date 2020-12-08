import {
  GET_FILMS, SEARCH_FILMS, GET_GENRE, GET_FILMS_BY_GENRES, SHOW_LIST_FILMS, GET_TRAILER
} from '../constants/constants';

const initialState = {
  films: [],
  genre: [],
  showListFilms: false,
  trailer: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return { ...state, films: action.payload }
    case SEARCH_FILMS:
      return { ...state, films: action.payload, arrFilmsByGenre: action.payload }
    case GET_GENRE:
      return { ...state, genre: action.payload }
    case GET_FILMS_BY_GENRES:
      return { ...state, films: action.payload }
    case SHOW_LIST_FILMS:
      return { ...state, showListFilms: action.payload }
    case GET_TRAILER:
      return { ...state, trailer: action.payload}
  }
  return state
};

export default reducer;