import { GET_FILMS, SEARCH_FILMS, GET_GENRE } from '../constants/constants';

const initialState = {
  films: [],
  genre: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return { ...state, films: action.payload }
    case SEARCH_FILMS:
      return { ...state, films: action.payload }
    case GET_GENRE:
      return { ...state, genre: action.payload}
  }
  return state
};

export default reducer;