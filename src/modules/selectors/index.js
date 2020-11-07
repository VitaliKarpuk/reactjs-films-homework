export const getListFilms = state => {
  return state.films.length > 0 && state.films
}

export const getGenre = state => {
  return state.genre
}