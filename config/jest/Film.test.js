/* eslint-disable no-undef */
import React from 'react'
import { unmountComponentAtNode } from "react-dom";
import { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Film from '../../src/components/Film/Film';
import ModalWatch from '../../src/components/ModalWatch/ModalWatch';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Test Film component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Film genreFilmArray={[]} />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.className).toBe('movie-list__item');
  expect(result.props.children[0].type).toBe('div');
  expect(result.props.children[1].type).toBe('div');
  expect(result.props.children[2].type).toBe('p');
  expect(result.props.children.length).toBe(5)

  expect(result).toMatchSnapshot();
})

it('renders correctly Film component in MovieList component', () => {
  let root;
  act(() => {
    root = create(<Film changeGenre={() => { }} genreFilmArray={['1', '2']} genre={['1', '2']} />)
  });

  expect(root).toMatchSnapshot();
})