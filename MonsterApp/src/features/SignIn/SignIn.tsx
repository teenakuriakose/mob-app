import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppBody from '../core/components/containers/AppBody';
import Text from '../../features/core/components/Text/Text';
import {useTheme} from '../../theme';
import {useTranslation} from 'react-i18next';
import Icon from '../core/components/Icon';
import {useSelector} from 'react-redux';
import FullScreenModal from '../core/components/FullScreenModal';
import CountrySelect from '../countrySelection/CountrySelection';
import LanguageSelect from '../languageSelection/LanguageSelection';
import SvgMonster from '../icons/SvgMonster';
import TextInput from '../core/components/TextInput';

const SignIn = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {languageSelection, countrySelection} = useSelector(state => state);
  const [countryModal, setCountryModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [text, setText] = useState('');

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
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <SvgMonster color={theme.colors.primary} width={200} height={200} />
      </View>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <Text variant={'heading'} color={theme.colors.primary}>
          {t('welcome')}
        </Text>
      </View>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <TextInput label={t('username')} />
      </View>
      <View flexDirection="row" flexGrow={1} justifyContent="center">
        <TextInput label={t('password')} secureTextEntry />
      </View>
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
