/* eslint-disable no-undef */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../../src/components/Button/Button';

describe('Test Btn component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Button title='Watch Now' className="btn__watch" />);
    renderer.getRenderOutput();
    expect(result.type).toBe('button');
    expect(result.props.className).toBe('btn__watch');
    expect(result.props.children).toBe('Watch Now');
    expect(result).toMatchSnapshot();
  })
})