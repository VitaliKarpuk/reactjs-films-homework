/* eslint-disable no-undef */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPage from '../../src/pages/MovieDetailsPage/MovieDetailsPage';

describe('Test MovieDetailsPage component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<MovieDetailsPage />);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toBe('movie-details');
    expect(result).toMatchSnapshot();
  })
})