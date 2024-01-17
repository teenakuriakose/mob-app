import React from 'react';
import {withTheme} from 'react-native-paper';
import {Modal, View, StyleSheet} from 'react-native';

const FullScreenModal = (props: any): JSX.Element => {
  return (
    <Modal coverScreen={true} {...props}>
      <View style={styles.viewStyle}>{props.children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 0,
    flexGrow: 1,
  },
});

FullScreenModal.defaultProps = {
  animationType: 'slide',
  transparent: true,
  onDismiss: () => {},
};

export default withTheme(FullScreenModal);
