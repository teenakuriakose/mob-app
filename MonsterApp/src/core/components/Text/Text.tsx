import {View, Text as TextComponent, StyleSheet} from 'react-native';
import React from 'react';
import {withTheme} from '../../../theme';

const Text = props => {
  const {variant, children, color} = props;

  const getStyles = variant => {
    const baseStyles = {
      color: color,
    };
    switch (variant) {
      case 'heading':
        return {
          ...baseStyles,
          fontSize: 44,
          fontWeight: '600',
        };
      case 'heading2':
        return {
          ...baseStyles,
          fontSize: 36,
          fontWeight: '600',
        };
      case 'text1':
        return {
          ...baseStyles,
          fontSize: 18,
          fontWeight: '600',
        };
      case 'text2':
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
