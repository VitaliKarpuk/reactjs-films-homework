/* eslint-disable no-undef */
import cofigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import requestSearchFilms from '../../src/modules/actions/requestSearchFilms';
import { API_KEY, SEARCH_FILMS, BASE_URL, categories } from '../../src/modules/constants/constants';

import fetchMock from 'fetch-mock';


const middlewares = [thunk]
const mockStore = cofigureMockStore(middlewares)
const title = 'test';
afterEach(() => {
  fetchMock.reset();
  fetchMock.restore()
})

it('action getGenre', () => {

  fetchMock.getOnce(`${BASE_URL}${categories.search}/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`, {
    headers: { 'content-type': 'application/json' },
    body: { results: [1, 2, 3], status: 'ok' }
  })

  const expectedActions = [
    {
      type: SEARCH_FILMS,
      payload: [1, 2, 3]
    }
  ]
  const store = mockStore({})

  return store.dispatch(requestSearchFilms(title)).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
