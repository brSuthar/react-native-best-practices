import React, {useState} from 'react';
import {TextInput} from 'react-native';

const InputField: React.FunctionComponent<IPropsInputField> = (
  props: IPropsInputField,
): React.JSX.Element => {
  const {value, placeholder, onChangeText} = props;
  return (
    <TextInput
      testID="input"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;
