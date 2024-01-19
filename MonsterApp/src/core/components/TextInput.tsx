import React from 'react';
import {
  TextInput as CoreTextInput,
  HelperText,
  useTheme,
} from 'react-native-paper';
import {View} from 'react-native';
import Text from './Text';

const TextInput = props => {
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
          <HelperText type="error" visible={true}>
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
