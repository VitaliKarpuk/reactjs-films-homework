/* eslint-disable no-undef */
import React from 'react'
import MovieList from '../../src/components/MovieList/MovieList';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import cofigureMockStore from 'redux-mock-store';


const mockStore = cofigureMockStore();

describe('My Connected React-Redux Component', () => {
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
        <MovieList />
      </Provider>
    );
  });

  it("renders Search component", () => {
    const result = component.toTree().rendered.rendered.props.children[0].props.changeGenre([{ id: 1, name: 'test' }])
    expect(result).toEqual([]);
  });

  it("renders Search component", () => {
    expect(component.toJSON()).toMatchSnapshot();;
  });
})