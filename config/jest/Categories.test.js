/* eslint-disable no-undef */
import React from 'react';
import Categories from '../../src/components/Categories/Caregories';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import cofigureMockStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";


const mockStore = cofigureMockStore();

describe('Test ModalInfo component', () => {
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
        <MemoryRouter initialEntries={['/top_rated']}>
          <Categories />
        </MemoryRouter>
      </Provider>
    );
  });
  it("renders Search component", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})