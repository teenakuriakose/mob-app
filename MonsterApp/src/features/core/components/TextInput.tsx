import React, {useState} from 'react';
import {TextInput as CoreTextInput, useTheme} from 'react-native-paper';
import {View} from 'react-native';

const TextInput = props => {
  const [text, setText] = useState('');
  const {label = '', ...rest} = props;
  const theme = useTheme();

  return (
    <View style={{flex: 1}}>
      <CoreTextInput
        mode={'outlined'}
        style={{width: '100%'}}
        label={label}
        value={text}
        onChangeText={text => setText(text)}
        theme={theme}
        {...rest}
      />
    </View>
  );
};

export default TextInput;
