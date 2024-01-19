import {View} from 'react-native';
import React, {useState} from 'react';
import Text from '../../core/components/Text/Text';
import {useTheme} from '../../theme/index';
import {SpacerSizes} from '../../core/constants';
import Spacer from '../../core/components/Spacer';
import TextInput from '../../core/components/TextInput';
import {useTranslation} from 'react-i18next';
import Button from '../../core/components/Button';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_DASHBOARD} from '../../navigation/routes';
import AppBody from '../../core/components/containers/AppBody';

const SignUp = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const {t} = useTranslation();
  const {goBack, navigate} = useNavigation();

  return (
    <AppBody>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <Text variant={'heading'} color={theme.colors.primary}>
          {t('register')}
        </Text>
      </View>
      <Spacer size={SpacerSizes.lg} />
      <TextInput
        label={t('username')}
        text={username}
        onChange={val => setUsername(val)}
      />
      <Spacer size={SpacerSizes.md} />
      <TextInput label={t('password')} secureTextEntry />
      <Spacer size={SpacerSizes.md} />

      <Button
        onPress={() => {
          navigate(ROUTE_DASHBOARD);
        }}>
        <Text color={theme.colors.surface} variant="text1">
          {t('register')}
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

export default SignUp;
