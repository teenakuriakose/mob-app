import {Text as TextComponent, StyleSheet} from 'react-native';
import React from 'react';
import {withTheme} from '../../../theme';
import {TEXT_VARIANT} from '../../constants';

const Text = props => {
  const {variant, children, color} = props;

  const getStyles = variant => {
    const baseStyles = {
      color: color,
    };
    switch (variant) {
      case TEXT_VARIANT.HEADING_1:
        return {
          ...baseStyles,
          fontSize: 44,
          fontWeight: '600',
        };
      case TEXT_VARIANT.HEADING_2:
        return {
          ...baseStyles,
          fontSize: 36,
          fontWeight: '600',
        };
      case TEXT_VARIANT.TEXT_1:
        return {
          ...baseStyles,
          fontSize: 18,
          fontWeight: '600',
        };
      case TEXT_VARIANT.TEXT_2:
        return {
          ...baseStyles,
          fontSize: 14,
        };
      default:
        return {
          ...baseStyles,
          fontSize: 14,
        };
    }
  };

  const styles = makeStyles(getStyles(variant));

  return <TextComponent style={styles.textStyle}>{children}</TextComponent>;
};

const makeStyles = style =>
  StyleSheet.create({
    textStyle: {
      ...style,
    },
  });

export default withTheme(Text);
