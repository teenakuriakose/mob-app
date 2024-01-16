import {
  Provider as ThemeProvider,
  withTheme,
  useTheme,
} from 'react-native-paper';
import * as Countries from '../theme/countries';
import {default as theme} from '../theme/AE/index';

export const getSelectedTheme = countryCode => {
  const countryData = Countries[countryCode.trim().toUpperCase()] || '';
  return countryData;
};

export {ThemeProvider, withTheme, useTheme};
