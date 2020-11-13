/* eslint-disable no-undef */
import cofigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { API_KEY, GET_FILMS, BASE_URL, categories } from '../../src/modules/constants/constants';
import fetchMock from 'fetch-mock';
import requestFilms from "../../src/modules/actions/requestFilms";

const middlewares = [thunk]
const mockStore = cofigureMockStore(middlewares)

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore()
})
it('action getGenre', () => {
  fetchMock.getOnce(`${BASE_URL}/movie/${categories.popular}?api_key=${API_KEY}&language=en-US&page=1`, {
    headers: { 'content-type': 'application/json' },
    body: { results: [1, 2, 3], status: 'ok' }
  })

  const expectedActions = [
    {
      type: GET_FILMS,
      payload: [1, 2, 3]
    }
  ]
  const store = mockStore({})

  return store.dispatch(requestFilms()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
