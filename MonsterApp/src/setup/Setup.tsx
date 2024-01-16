import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import LanguageSelect from '../features/languageSelection/LanguageSelection';

const Setup = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? '#000' : '#FFF',
          }}>
          <Text>Monster App</Text>
          <LanguageSelect />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Setup;
