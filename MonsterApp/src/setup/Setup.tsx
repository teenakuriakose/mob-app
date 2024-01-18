import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import LanguageSelect from '../features/languageSelection/LanguageSelection';
import {ThemeProvider, getSelectedTheme} from '../theme/index';
import {DefaultTheme} from 'react-native-paper';
import CountrySelect from '../features/countrySelection/CountrySelection';
import {useSelector} from 'react-redux';
import SignIn from '../features/SignIn/SignIn';
import {useTranslation} from 'react-i18next';


const Setup = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const countrySelection = useSelector(state => state.countrySelection.country);
  const language = useSelector(state => state.languageSelection.lang);
  const {i18n} = useTranslation();

  useEffect(() => {
    !!language && i18n.changeLanguage(language);
  }, []);
  
  
  return (
    <>
      <ThemeProvider theme={getSelectedTheme(countrySelection)}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View
            style={{
              backgroundColor: isDarkMode ? '#000' : '#FFF',
            }}>
            <SignIn />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default Setup;
