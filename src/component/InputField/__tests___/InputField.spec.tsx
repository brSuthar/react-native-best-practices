import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import 'react-test-renderer';
import InputField from '..';

describe('<InputField/>', () => {
  it('take snap for <INputField/>', () => {
    const field = render(<InputField value="" />);
    expect(field).toMatchSnapshot();
  });

  it('initial test', () => {
    const {getByTestId} = render(<InputField />);
    const input = getByTestId('input');
    expect(input.props.placeholder).toBeUndefined();
    expect(input.props.value).toBeUndefined();
    expect(input.props.onChangeText).toBeUndefined();
  });

  it('testing phase - one', () => {
    const {getByTestId} = render(
      <InputField
        value="phase 1"
        onChangeText={() => {}}
        placeholder="placeholder 1"
      />
    );
    const element = getByTestId('input');

    expect(element.props.value).toBe('phase 1');
    expect(element.props.placeholder).toBe('placeholder 1')
  });
});
