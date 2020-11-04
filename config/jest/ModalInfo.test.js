/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalInfo from '../../src/components/ModalInfo/ModalInfo';

describe('Test ModalInfo component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<ModalInfo className='modal-info' />);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toBe('modal-info')
    expect(result.props.children.type).toBe('p');

    expect(result).toMatchSnapshot();
  })
})