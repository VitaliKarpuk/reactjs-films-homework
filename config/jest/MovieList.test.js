/* eslint-disable no-undef */
import React from 'react'
import MovieList from '../../src/components/MovieList/MovieList';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import cofigureMockStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";


const mockStore = cofigureMockStore();

describe('render MovieList component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      films: [{ id: 1, genre_ids: [1] }],
      genre: [{ id: 1 }],
      dispatch: jest.fn()
    });

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <MovieList />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders MovieList component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})