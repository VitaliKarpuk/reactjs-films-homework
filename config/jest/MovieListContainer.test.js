/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import cofigureMockStore from 'redux-mock-store';

import MovieListContainer from '../../src/conteiners/MovieListContainer';
import MovieList from '../../src/components/MovieList/MovieList';

const mockStore = cofigureMockStore();


describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      films: [{ id: 1, genre_ids: [] }],
      genre: [1, 2],
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <MovieListContainer />
      </Provider>
    );
  });


  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with given state from Redux store', () => {
    renderer.act(() => {
      <MovieList genreFilmArray={[{ id: 1 }]} films={[{ id: 1 }]} />
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});