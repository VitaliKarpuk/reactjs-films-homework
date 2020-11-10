/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../../src/components/MovieList/MovieList';

describe('Test MovieList component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<MovieList />);
    renderer.getRenderOutput();
    expect(result.type).toBe('section');
    expect(result.props.className).toBe('movie-list')
    expect(result).toMatchSnapshot();
  })
})
