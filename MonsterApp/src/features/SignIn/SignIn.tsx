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

const SignIn = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {languageSelection, countrySelection} = useSelector(state => state);
  const [countryModal, setCountryModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  const onCountryChangeSelect = () => {
    setCountryModal(true);
  };

  return (
    <AppBody>
      <View flexDirection="row" flexGrow={1} justifyContent="flex-end">
        <TouchableOpacity onPress={() => {}}>
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
      <Text variant={'heading'} color={theme.colors.primary}>
        {t('welcome')}
      </Text>
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
