/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalInfoFilm from '../../src/components/ModalInfoFilm/ModalInfoFilm';

describe('Test ModalInfo component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<ModalInfoFilm genreFilm={['1', '2']} title={'test'}/>);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toBe('movie-info');
    expect(result.props.children.length).toBe(5);
    expect(result.props.children[0].type).toBe('div');
    expect(result.props.children[1].type).toBe('div');
    expect(result.props.children[2].type).toBe('p');
    expect(result.props.children[3].type).toBe('p');
    expect(result).toMatchSnapshot();
  })
})