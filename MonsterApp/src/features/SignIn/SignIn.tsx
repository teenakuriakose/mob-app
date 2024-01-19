import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppBody from '../../core/components/AppBody';
import Text from '../../core/components/Text';
import {useTheme} from '../../theme';
import {useTranslation} from 'react-i18next';
import Icon from '../../core/components/Icon';
import {useSelector} from 'react-redux';
import CountrySelect from '../CountrySelection/CountrySelection';
import LanguageSelect from '../LanguageSelection/LanguageSelection';
import SvgMonster from '../../core/icons/SvgMonster';
import TextInput from '../../core/components/TextInput';
import Spacer from '../../core/components/Spacer';
import {SpacerSizes} from '../../core/constants';
import Button from '../../core/components/Button';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_DASHBOARD, ROUTE_SIGN_UP} from '../../navigation/routes';
import {useCredentialsValidation} from '../../hooks/useCredentialsValidation';

const SignIn = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {languageSelection, countrySelection} = useSelector(state => state);
  const [countryModal, setCountryModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const navigation = useNavigation();
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

  const onCountryChangeSelect = () => {
    setCountryModal(true);
  };

  return (
    <AppBody>
      <View flexDirection="row" flexGrow={1} justifyContent="flex-end">
        <TouchableOpacity onPress={() => setLanguageModal(true)}>
          <Icon size={50} color={theme.colors.primary}>
            <Text color={theme.colors.surface}>
              {t(languageSelection.lang)}
            </Text>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCountryChangeSelect}>
          <Icon size={50} color={theme.colors.primary}>
            <Text color={theme.colors.surface}>
              {t(countrySelection.country)}
            </Text>
          </Icon>
        </TouchableOpacity>
      </View>
      <Spacer size={SpacerSizes.lg} />
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <SvgMonster color={theme.colors.primary} width={200} height={200} />
      </View>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <Text variant={'heading'} color={theme.colors.primary}>
          {t('welcome')}
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
          navigation.push(ROUTE_DASHBOARD);
        }}>
        <Text color={theme.colors.surface} variant="text1">
          {t('login')}
        </Text>
      </Button>
      <Button
        mode={'text'}
        onPress={() => {
          navigation.push(ROUTE_SIGN_UP);
        }}>
        <Text color={theme.colors.primary} variant="text1">
          {t('register')}
        </Text>
      </Button>
      {countryModal && (
        <CountrySelect onDismiss={() => setCountryModal(false)} />
      )}
      {languageModal && (
        <LanguageSelect onDismiss={() => setLanguageModal(false)} />
      )}
    </AppBody>
  );
};

export default SignIn;
