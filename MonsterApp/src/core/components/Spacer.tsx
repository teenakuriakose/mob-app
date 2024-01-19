import React from 'react';

import {SpacerProps} from '../types';
import {View, StyleSheet} from 'react-native';
import {SpacerSizes} from '../constants';

/**
 * @Component Spacer
 * @description Spacer for the application
 * @props size [possible sizes of the app, e.g xxl, lg]
 * ## Usage
 * ```js
 * <Spacer size={'sm'}/>
 * <Spacer horizontal size={'xxl'}/>
 */
const Spacer = (props: SpacerProps): JSX.Element => {
  const {size = SpacerSizes.sm, vertical, horizontal, ...rest} = props;
  const styles = makeStyles(vertical, horizontal, size);

  return <View style={styles.spacerStyle} />;
};

const makeStyles = (vertical, horizontal, size) =>
  StyleSheet.create({
    spacerStyle: {
      paddingHorizontal: horizontal ? size / 2 : 0,
      paddingVertical: vertical ? size / 2 : 0,
    },
  });

Spacer.defaultProps = {
  horizontal: false,
  vertical: true, //Default value
  size: SpacerSizes.sm,
};

export default Spacer;
