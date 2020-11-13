/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTrailer from '../../src/components/ModalTrailer/ModalTrailer';

describe('Test ModalTrailer component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<ModalTrailer />);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children.props.children[0].type).toBe('button');
    expect(result.props.children.props.children[1].type).toBe('div');
    result.props.children.props.children[0].props.onClick();

    expect(result).toMatchSnapshot();
  })
})
