/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import cofigureMockStore from 'redux-mock-store';
import SearchInput from '../../src/components/SearchInput/SearchInput';

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
        <SearchInput />
      </Provider>
    );
  });

  it("renders Search component", () => {
    expect(component.root.findByType('input').props.value).toEqual('')
    component.root.findByType('input').props.onChange({target: {value: 'test'}});
    expect(component.toJSON()).toMatchSnapshot();
    component.root.findByType('input').props.onKeyPress({key: "Enter"});
  });
})