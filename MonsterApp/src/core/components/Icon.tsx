import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Icon = props => {
  const {color, size, children} = props;
  const styles = makeStyles(size, color);
  return <View style={styles.icon}>{children}</View>;
};

export default Icon;

const makeStyles = (size, color) =>
  StyleSheet.create({
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: color,
      color: '#fff',
      margin: 10,
    },
  });
