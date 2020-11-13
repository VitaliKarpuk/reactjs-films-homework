/* eslint-disable no-undef */
import getFilms from "../../src/modules/actions/getFilms";
import cofigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { API_KEY, GET_FILMS } from '../../src/modules/constants/constants';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = cofigureMockStore(middlewares)

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore()
})
it('action getGenre', () => {
  fetchMock.getOnce(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, {
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

  return store.dispatch(getFilms()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
