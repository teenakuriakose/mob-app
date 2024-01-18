import React, {useState} from 'react';
import {TextInput as CoreTextInput, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import Text from './Text/Text';

const TextInput = props => {
  // const [text, setText] = useState('');
  const {
    label = '',
    onChange = () => {},
    text,
    backgroundColor,
    error,
    errorMessage,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <View flexDirection="row" flexGrow={1} justifyContent="center">
      <View style={{flex: 1}}>
        <CoreTextInput
          mode={'outlined'}
          style={{width: '100%', backgroundColor: theme.colors.surface}}
          label={<Text>{label}</Text>}
          value={text}
          onChangeText={onChange}
          error={error}
          theme={theme}
          {...rest}
        />
        {error ? (
          <Text type="error" color={theme.colors.error} visible={true}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
