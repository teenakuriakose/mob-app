import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme} from '../../theme/index';
import Button from './Button';
import {useTranslation} from 'react-i18next';
import Spacer from './Spacer';
import {SpacerSizes} from '../constants';
import Text from './Text';
import {SketchCanvas as CoreSketchCanvas} from '@terrylinla/react-native-sketch-canvas';

const SketchCanvas = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const [userEnd, setUserEnd] = useState(false);
  const canvas = useRef<any>();

  const clearCanvas = () => {
    setUserEnd(false);
    canvas?.current.clear();
  };

  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          height: 400,
          alignItems: 'center',
          borderWidth: 1,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CoreSketchCanvas
            ref={canvas}
            style={{flex: 1}}
            strokeColor={theme.colors.primary}
            strokeWidth={4}
            onStrokeEnd={() => {
              setUserEnd(true);
            }}
          />
        </View>
      </View>
      <Spacer size={SpacerSizes.xs} />

      <Button
        mode={'text'}
        onPress={() => {
          clearCanvas();
        }}>
        <Text color={theme.colors.primary} variant="text1">
          {t('clear')}
        </Text>
      </Button>
    </>
  );
};

export default SketchCanvas;
