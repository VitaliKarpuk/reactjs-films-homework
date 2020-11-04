/* eslint-disable no-undef */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../src/App';
import MovieDetailsPage from '../../src/pages/MovieDetailsPage/MovieDetailsPage';

describe('Test App component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toBe('wrapper')
    expect(result.props.children).toMatchObject(<MovieDetailsPage />);
    expect(result).toMatchSnapshot();
  })
})
