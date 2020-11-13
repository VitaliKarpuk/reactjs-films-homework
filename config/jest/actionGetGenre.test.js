/* eslint-disable no-undef */
import cofigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getGenre from '../../src/modules/actions/getGenre';
import { API_KEY, GET_GENRE } from '../../src/modules/constants/constants';

import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = cofigureMockStore(middlewares)

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore()
})
it('action getGenre', () => {
  fetchMock.getOnce(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`, {
    headers: { 'content-type': 'application/json' },
    body: { genres: [1, 2, 3], status: 'ok' }
  })

  const expectedActions = [
    {
      type: GET_GENRE,
      payload: [1, 2, 3]
    }
  ]
  const store = mockStore({})

  return store.dispatch(getGenre()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
