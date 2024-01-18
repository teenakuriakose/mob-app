import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppBody = props => {
  const {children} = props;
  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default AppBody;

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 24,
  },
});
