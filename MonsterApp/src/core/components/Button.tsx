import React from 'react';
import {Button as PaperButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

import {useTheme} from '../../theme';

/**
 * @Component Button
 * @description Themed Button types
 * @props size [possible sizes of the app, e.g xxl, lg]
 * @Usage
       <Button onPress={() => console.log('Pressed')}>
          {t('prelaunch.login')}
        </Button>
 */

type ButtonProps = React.ComponentProps<typeof PaperButton>;

const Button = (props: ButtonProps) => {
  const {disabled = false, ...rest} = props;
  const theme = useTheme();

  return (
    <PaperButton
      mode="contained"
      style={styles.buttonStyle}
      disabled={disabled}
      {...rest}>
      <View
        flexDirection="row"
        flexGrow={1}
        justifyContent="center"
        alignItems="center">
        {props.children}
      </View>
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    borderRadius: 20,
  },
});

export default Button;
