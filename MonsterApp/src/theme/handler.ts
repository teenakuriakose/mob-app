import {Theme} from 'react-native-paper';

export const getTheme: Theme = colors => {
  return {
    dark: false,
    colors: {
      primary: colors.PRIMARY,
      error: colors.ERROR,
      text: colors.TEXT,
      surface: colors.WHITE,
    },
  };
};
