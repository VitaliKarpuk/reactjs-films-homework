/* eslint-disable no-undef */
import reducer from '../../src/modules/reducer/reducer'
import { GET_FILMS, GET_GENRE, SEARCH_FILMS, GET_FILMS_BY_GENRES, SHOW_LIST_FILMS, GET_TRAILER } from '../../src/modules/constants/constants';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer([], {})).toEqual(
      []
    )
  })

  it('action GET_FILMS', () => {
    expect(
      reducer([], {
        type: GET_FILMS,
        payload: ['1']
      })
    ).toEqual(
      {
        films: ['1'],
      }
    )
  })

  it('action SEARCH_FILMS', () => {
    expect(
      reducer([], {
        type: SEARCH_FILMS,
        payload: ['1']
      })
    ).toEqual(
      {
        films: ['1'],
        arrFilmsByGenre: ['1']
      }
    )
  })

  it('action GET_GENRE', () => {
    expect(
      reducer([], {
        type: GET_GENRE,
        payload: ['1']
      })
    ).toEqual(
      {
        genre: ['1']
      }
    )
  })

  it('action GET_FILMS_BY_GENRES', () => {
    expect(
      reducer([], {
        type: GET_FILMS_BY_GENRES,
        payload: ['1']
      })
    ).toEqual(
      {
        films: ['1']
      }
    )
  })

  it('action SHOW_LIST_FILMS', () => {
    expect(
      reducer([], {
        type: SHOW_LIST_FILMS,
        payload: true
      })
    ).toEqual(
      {
        showListFilms: true
      }
    )
  })

  it('action GET_TRAILER', () => {
    expect(
      reducer([], {
        type: GET_TRAILER,
        payload: ['1']
      })
    ).toEqual(
      {
        trailer: ['1']
      }
    )
  })
})