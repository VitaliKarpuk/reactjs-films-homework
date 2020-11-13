/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import cofigureMockStore from 'redux-mock-store';

import SearchInputContainer from '../../src/conteiners/SearchInputContainer';

const mockStore = cofigureMockStore();

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      dispatch: jest.fn()
    });


    component = renderer.create(
      <Provider store={store}>
        <SearchInputContainer />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with given state from Redux store', () => {
    renderer.act(() => {
      component.root.findByType('input').props.onKeyPress({ key: 'Enter' })
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });


  });
})