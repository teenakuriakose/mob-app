import React, {useEffect, useRef} from 'react';
import {ThemeProvider, getSelectedTheme} from '../theme/index';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '../navigation';

const Setup = () => {
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
