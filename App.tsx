/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string>('');

  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity
        testID="button-1"
        onPress={() => {
          setCount(pre => pre + 1);
        }}>
        <Text>Click</Text>
      </TouchableOpacity>
      <Text>Count: {count}</Text>
      <TextInput
        testID="textInput"
        placeholder="username"
        value={text}
        onChangeText={setText}
      />
      <Text>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
