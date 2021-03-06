/* eslint-disable no-undef */
import React from 'react'
import { unmountComponentAtNode } from "react-dom";
import { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Film from '../../src/components/Film/Film';

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
      trailer: [{ id: 1 }],
      dispatch: jest.fn()
    });

    component = renderer.create(
      <Provider store={store}>
        <Film genreFilmArray={[]} genre={[{ id: 1 }]} changeGenre={(state) => state}/>
      </Provider>
    );
  });

  it("renders Films component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
