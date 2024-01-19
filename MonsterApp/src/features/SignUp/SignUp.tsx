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
import {useCredentialsValidation} from '../../hooks/useCredentialsValidation';
import {useSelector} from 'react-redux';

const SignUp = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {goBack, navigate} = useNavigation();
  const {countrySelection} = useSelector(state => state);
  const {
    username,
    setUsername,
    usernameError,
    isUsernameValid,
    password,
    setPassword,
    passwordError,
    isPasswordValid,
    handleUsernameBlur,
    handlePasswordBlur,
  } = useCredentialsValidation(countrySelection.country, t);

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
        error={!!usernameError}
        onBlur={handleUsernameBlur}
        errorMessage={usernameError || ''}
      />
      <Spacer size={SpacerSizes.md} />
      <TextInput
        label={t('password')}
        secureTextEntry
        text={password}
        onBlur={handlePasswordBlur}
        onChange={val => setPassword(val)}
        error={!!passwordError}
        errorMessage={passwordError || ''}
      />
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
