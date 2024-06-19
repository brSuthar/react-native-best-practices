/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {render, fireEvent} from '@testing-library/react-native';
import 'react-test-renderer';

describe('snapshot ', () => {
  it('take snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});

describe('test app input', () => {
  it('button test', () => {
    const {getByTestId, getByText} = render(<App />);
    const button = getByTestId('button-1');
    fireEvent.press(button);

    const text = getByText('Count: 1');
    expect(text).toBeTruthy();
  });
  it('input test', () => {
    const {getByTestId} = render(<App />);
    const input = getByTestId('textInput');
    fireEvent.changeText(input, 'Hello');
    expect(input.props.value).toMatch('Hello');
    expect(input.props.placeholder).toBe('username');
    // expect(input.props.keyb)
  });
});
