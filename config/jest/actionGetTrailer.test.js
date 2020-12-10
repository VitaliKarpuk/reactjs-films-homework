/* eslint-disable no-undef */
import cofigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { API_KEY, GET_TRAILER, BASE_URL } from '../../src/modules/constants/constants';
import requesTrailer from '../../src/modules/actions/requesTrailer';

import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = cofigureMockStore(middlewares)

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore()
})
it('action getGenre', () => {
  fetchMock.getOnce(`${BASE_URL}/movie/590706/videos?api_key=${API_KEY}&language=en-US`, {
    headers: { 'content-type': 'application/json' },
    body: { results: [1, 2, 3], status: 'ok' }
  })

  const expectedActions = [
    {
      type: GET_TRAILER,
      payload: [1, 2, 3]
    }
  ]
  const store = mockStore({})

  return store.dispatch(requesTrailer('590706')).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
