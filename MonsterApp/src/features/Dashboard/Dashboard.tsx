import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import AppBody from '../../core/components/containers/AppBody';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../theme';
import Text from '../../core/components/Text/Text';
import Spacer from '../../core/components/Spacer';
import {SpacerSizes} from '../../core/constants';
import Button from '../../core/components/Button';
import {useNavigation} from '@react-navigation/native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';

const Dashboard = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const {goBack, navigate} = useNavigation();
  const canvas = useRef<any>();
  const [userEnd, setUserEnd] = useState(false);

  const clearCanvas = () => {
    setUserEnd(false);
    canvas?.current.clear();
  };

  return (
    <AppBody>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <Text variant={'heading'} color={theme.colors.primary}>
          {t('welcome')}
        </Text>
      </View>

      <Spacer size={SpacerSizes.md} />
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <Text variant={'text1'} color={theme.colors.text}>
          {t('drawAMonster')}
        </Text>
      </View>
      <Spacer size={SpacerSizes.md} />

      <View
        style={{
          justifyContent: 'center',
          height: 400,
          alignItems: 'center',
          borderWidth: 1,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SketchCanvas
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

      <Spacer size={SpacerSizes.md} />

      <Button
        mode={'outlined'}
        onPress={() => {
          goBack();
        }}>
        <Text color={theme.colors.primary} variant="text1">
          {t('back')}
        </Text>
      </Button>
    </AppBody>
  );
};

export default Dashboard;
