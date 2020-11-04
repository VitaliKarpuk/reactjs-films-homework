/* eslint-disable no-undef */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../src/App';
import MovieDetailsPage from '../../src/pages/MovieDetailsPage/MovieDetailsPage';
import MovieListContainer from '../../src/conteiners/MovieListContainer';

describe('Test App component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toBe('wrapper')
    expect(result.props.children[0]).toMatchObject(<MovieDetailsPage />);
    expect(result.props.children[1]).toMatchObject(<MovieListContainer />);
    expect(result).toMatchSnapshot();
  })
})
