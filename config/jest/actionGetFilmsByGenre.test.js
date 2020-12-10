/* eslint-disable no-undef */
import cofigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { API_KEY, GET_FILMS, BASE_URL } from '../../src/modules/constants/constants';
import requestFilmsByGenre from "../../src/modules/actions/requestFilmsByGenre";

import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = cofigureMockStore(middlewares)

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore()
})
it('action getGenre', () => {
  fetchMock.getOnce(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, {
    headers: { 'content-type': 'application/json' },
    body: {
      results: [{
        name: 'action',
        genre_ids: ['1'],
        id: '1'
      }], status: 'ok'
    }
  })

  const expectedActions = [
    {
      type: GET_FILMS,
      payload: [{
        name: 'action',
        genre_ids: ['1'],
        id: '1'
      }]
    }
  ]
  const store = mockStore({
    genre: [{
      name: 'action',
      genre_ids: ['1'],
      id: '1'
    }]
  })

  return store.dispatch(requestFilmsByGenre('popular', 'action', '1')).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
