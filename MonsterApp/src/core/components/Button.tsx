import React from 'react';
import {Button as PaperButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

import {useTheme} from '../../theme';

/**
 * @Component Button
 * @description Themed Button types
 * @props size [possible sizes of the app, e.g xxl, lg]
 * @variants primary 
 *           transparent
 *           link
 * @Usage
       <Button primary onPress={() => console.log('Pressed')}>
          {t('prelaunch.login')}
        </Button>
       <Button tranparent onPress={() => console.log('Pressed')}>
          {t('prelaunch.login')}
        </Button>
 */

const Button = (props: any) => {
  const {
    labelColorType = 'onPrimary',
    themeContained,
    themeLink,
    themeTransparent,
    transparent,
    link,
    primary,
    small,
    size,
    padding = 8,
    fontSize = 14,
    disabled = false,
    isRounded,
    style = {},
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <PaperButton mode="contained" style={styles.buttonStyle} {...rest}>
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
