/* eslint-disable no-undef */
import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import TestRenderer, { act, create } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
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
  renderer.render(<Film />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  expect(result.props.className).toBe('movie-list__item');
  expect(result.props.children[0].type).toBe('div');
  expect(result.props.children[1].type).toBe('div');
  expect(result.props.children[2].type).toBe('p');
  expect(result.props.children[4]).toMatchObject(<ModalWatch />);
  expect(result.props.children.length).toBe(5)

  expect(result).toMatchSnapshot();
})

const tree = create(<Film />)
it('Test Film component', () => {
  tree.toJSON();
  expect(tree).toMatchSnapshot();
  console.log(tree)
  expect(tree).toMatchSnapshot();
  // act(() => {
  //   render(<Film />, container);
  // });
  // const div = container.querySelector('.movie-list__item');
  // console.log(div);

  // ReactTestUtils.Simulate.change(input, { target: { value: 'test' } });
  // expect(input.value).toBe("test");
  // ReactTestUtils.Simulate.keyDown(input, { key: "E" });

})

it('test', () => {
  const button = tree.root.findAllByType('button');
  // act( ()=> button.onPress())
  console.log(button.getIs);
})