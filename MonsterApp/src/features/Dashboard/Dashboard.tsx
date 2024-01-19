import {View} from 'react-native';
import React from 'react';
import AppBody from '../../core/components/AppBody';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../theme';
import Text from '../../core/components/Text';
import Spacer from '../../core/components/Spacer';
import {SpacerSizes} from '../../core/constants';
import Button from '../../core/components/Button';
import {useNavigation} from '@react-navigation/native';
import SketchCanvas from '../../core/components/SketchCanvas';

const Dashboard = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const {goBack} = useNavigation();

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
      <SketchCanvas />
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
