import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '../../core/components/Text';
import {useTheme} from '../../theme/index';
import {SpacerSizes, TEXT_VARIANT} from '../../core/constants';
import Spacer from '../../core/components/Spacer';
import TextInput from '../../core/components/TextInput';
import {useTranslation} from 'react-i18next';
import Button from '../../core/components/Button';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_DASHBOARD} from '../../navigation/routes';
import AppBody from '../../core/components/AppBody';
import {useCredentialsValidation} from '../../hooks/useCredentialsValidation';
import {useSelector, useDispatch} from 'react-redux';
import {signUp} from './store/actions';

const SignUp = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {goBack} = navigation;
  const dispatch = useDispatch();
  const {countrySelection, createUser} = useSelector(state => state);
  const {loading, response, error} = createUser || {};
  const {
    username,
    setUsername,
    usernameError,
    isUsernameValid,
    password,
    setPassword,
    passwordError,
    isPasswordValid,
    handleUsernameFocus,
    handlePasswordFocus,
  } = useCredentialsValidation(countrySelection.country, t);

  useEffect(() => {
    if (response) {
      navigation.replace(ROUTE_DASHBOARD);
    }
  }, [response]);

  return (
    <AppBody>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <Text variant={TEXT_VARIANT.HEADING_1} color={theme.colors.primary}>
          {t('register')}
        </Text>
      </View>
      <Spacer size={SpacerSizes.lg} />
      <TextInput
        label={t('username')}
        text={username}
        onChange={val => setUsername(val)}
        error={!!usernameError}
        onFocus={handleUsernameFocus}
        errorMessage={usernameError || ''}
      />
      <Spacer size={SpacerSizes.md} />
      <TextInput
        label={t('password')}
        secureTextEntry
        text={password}
        onFocus={handlePasswordFocus}
        onChange={val => setPassword(val)}
        error={!!passwordError}
        errorMessage={passwordError || ''}
      />
      <Spacer size={SpacerSizes.md} />

      <Button
        disabled={!(isUsernameValid && isPasswordValid && username && password)}
        onPress={() => {
          dispatch(
            signUp({username, password, country: countrySelection.country}),
          );
        }}>
        <Text color={theme.colors.surface} variant={TEXT_VARIANT.TEXT_1}>
          {t('register')}
        </Text>
      </Button>
      <Spacer size={SpacerSizes.md} />
      <Button
        mode={'outlined'}
        onPress={() => {
          goBack();
        }}>
        <Text color={theme.colors.primary} variant={TEXT_VARIANT.TEXT_1}>
          {t('back')}
        </Text>
      </Button>
    </AppBody>
  );
};

export default SignUp;
