import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import Text from '../../core/components/Text';
import i18next from 'i18next';
import {useDispatch, useSelector} from 'react-redux';
import * as LanguageActions from './store/actions';
import {useTheme} from 'react-native-paper';
import AppBody from '../../core/components/AppBody';
import FullScreenModal from '../../core/components/FullScreenModal';
import RNRestart from 'react-native-restart';
import {LANGUAGES, SpacerSizes, TEXT_VARIANT} from '../../core/constants';
import Button from '../../core/components/Button';
import Spacer from '../../core/components/Spacer';
import {isRTLLanguage} from './util';

const LanguageSelect = props => {
  const {t} = useTranslation();
  const theme = useTheme();
  const languages = [
    {label: t(`languages.${LANGUAGES.EN}`), value: LANGUAGES.EN},
    {label: t(`languages.${LANGUAGES.AR}`), value: LANGUAGES.AR},
    {label: t(`languages.${LANGUAGES.HI}`), value: LANGUAGES.HI},

    // Add more languages as needed
  ];

  const {onDismiss} = props;
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const dispatch = useDispatch();

  const styles = makeStyles(theme);

  return (
    <FullScreenModal>
      <AppBody>
        <Text variant={'heading2'} color={theme.colors.primary}>
          {' '}
          {t('changeLanguage')}
        </Text>
        <Spacer size={SpacerSizes.lg} />

        <FlatList
          data={languages}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedLanguage(item.value);
              }}
              style={
                selectedLanguage === item.value
                  ? styles.selectedLanguage
                  : styles.language
              }>
              <Text
                variant={TEXT_VARIANT.TEXT_1}
                color={
                  selectedLanguage === item.value
                    ? theme.colors.primary
                    : theme.colors.text
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        <Button mode={'outline'} onPress={() => onDismiss()}>
          <View
            flexDirection="row"
            flexGrow={1}
            justifyContent="center"
            alignItems="center">
            <Text color={theme.colors.primary} variant={TEXT_VARIANT.TEXT_1}>
              {t('cancel')}
            </Text>
          </View>
        </Button>
        <Button
          onPress={() => {
            i18next.changeLanguage(selectedLanguage);
            dispatch(LanguageActions.selectLanguage(selectedLanguage));
            onDismiss();
            I18nManager.forceRTL(isRTLLanguage(selectedLanguage));
            setTimeout(() => {
              RNRestart.Restart();
            }, 1000);
          }}>
          <Text color={theme.colors.surface} variant={TEXT_VARIANT.TEXT_1}>
            {t('save')}
          </Text>
        </Button>
      </AppBody>
    </FullScreenModal>
  );
};

const makeStyles = theme =>
  StyleSheet.create({
    language: {
      padding: 10,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    selectedLanguage: {
      padding: 10,
      backgroundColor: '#eee',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });

export default LanguageSelect;
