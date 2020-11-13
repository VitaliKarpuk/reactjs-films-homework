/* eslint-disable no-undef */
import React from 'react'
import SearchInput from '../../src/components/SearchInput/SearchInput';
import { render, unmountComponentAtNode } from "react-dom";
import TestRenderer, { act } from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

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

it("renders Search component", () => {
  act(() => {
    render(<SearchInput />, container);
  });
  const input = container.querySelector('input');
  expect(input.value).toBe("");
  ReactTestUtils.Simulate.change(input, { target: { value: 'test' } });
  expect(input.value).toBe("test");
  ReactTestUtils.Simulate.keyDown(input, { key: "E" });

});


it('Test event onKeyPress', () => {
  let root = TestRenderer.create(<SearchInput />)
  root.toJSON().children[0].props.onKeyPress({ key: "E" });
  expect(root.toJSON()).toMatchSnapshot();
})