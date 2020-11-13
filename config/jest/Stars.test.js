/* eslint-disable no-undef */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Stars from '../../src/components/Stars/Stars';

describe('Test stars component', () => {
  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Stars className='stars__raiting'/>);
    renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.className).toBe('stars__raiting')
    expect(result.props.children[1].type).toBe('div');
    expect(result).toMatchSnapshot();
  })
})
