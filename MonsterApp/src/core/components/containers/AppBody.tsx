import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const AppBody = props => {
  const {children} = props;
  return <View style={styles.viewStyle}>{children}</View>;
};

export default AppBody;

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 24,
  },
});
