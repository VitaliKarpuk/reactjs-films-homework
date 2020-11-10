/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTrailer from '../../src/components/ModalTrailer/ModalTrailer';
import Btn from '../../src/components/Btn/Btn';

describe('Test ModalTrailer component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<ModalTrailer />);
    renderer.getRenderOutput();
    expect(result.props.children.length).toBe(4);
    expect(result.props.children[0].type).toBe('div');
    expect(result.props.children[1].type).toBe('h3');
    expect(result.props.children[2]).toMatchObject(<Btn />)
    result.props.children[0].props.onClick();
    result.props.children[2].props.onClick();
    result.props.children[3].props.onOk();
    result.props.children[3].props.onCancel();

    expect(result).toMatchSnapshot();
  })
})
