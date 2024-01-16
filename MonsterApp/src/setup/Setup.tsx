import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import LanguageSelect from '../features/languageSelection/LanguageSelection';
import {ThemeProvider, getSelectedTheme} from '../theme/index';
import {DefaultTheme} from 'react-native-paper';
import CountrySelect from '../features/countrySelection/CountrySelection';
import {useSelector} from 'react-redux';

const Setup = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const countrySelection = useSelector(state => state.countrySelection.country);

  return (
    <>
      <ThemeProvider theme={getSelectedTheme(countrySelection)}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View
            style={{
              backgroundColor: isDarkMode ? '#000' : '#FFF',
            }}>
            <Text>Monster App</Text>
            <LanguageSelect />
            <CountrySelect />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default Setup;
