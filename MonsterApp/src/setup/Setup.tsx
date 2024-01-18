import {View, Text, useColorScheme, StatusBar} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LanguageSelect from '../features/languageSelection/LanguageSelection';
import {ThemeProvider, getSelectedTheme} from '../theme/index';
import {DefaultTheme} from 'react-native-paper';
import CountrySelect from '../features/countrySelection/CountrySelection';
import {useSelector} from 'react-redux';
import SignIn from '../features/SignIn/SignIn';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const Setup = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const countrySelection = useSelector(state => state.countrySelection.country);
  const language = useSelector(state => state.languageSelection.lang);
  const {i18n} = useTranslation();
  const navigationRef = useRef();

  useEffect(() => {
    !!language && i18n.changeLanguage(language);
  }, []);

  return (
    <>
      <ThemeProvider theme={getSelectedTheme(countrySelection)}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default Setup;
