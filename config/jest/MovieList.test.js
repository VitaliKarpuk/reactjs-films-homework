/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../../src/components/MovieList/MovieList';
import { create, act } from 'react-test-renderer';

it('renders MovieList components correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<MovieList films={[{ id: 1, genre_ids: [] }, { id: 2, genre_ids: [] }]} />);
  renderer.getRenderOutput();
  expect(result.type).toBe('section');
  expect(result.props.className).toBe('movie-list')
  expect(result).toMatchSnapshot();
})


it('renders correctly Film component in MovieList component', () => {
  let root;
  act(() => {
    root = create(<MovieList genreFilmArray={[]} onGetilms={() => { }} films={[{ id: 1, genre_ids: [] }, { id: 2, genre_ids: [] }]} genre={['1', '2']} />)
  });
  root.toTree().props.onGetilms()
  root.toTree().rendered.props.children[0].props.changeGenre(['1', '2']);
  expect(root).toMatchSnapshot();
})
