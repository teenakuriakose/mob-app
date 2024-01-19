import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import i18next from 'i18next';
import {useDispatch, useSelector} from 'react-redux';
import * as CountryActions from './store/actions';
import {useTheme} from 'react-native-paper';
import FullScreenModal from '../../core/components/FullScreenModal';
import {COUNTRIES, SpacerSizes, TEXT_VARIANT} from '../../core/constants';
import AppBody from '../../core/components/AppBody';
import Text from '../../core/components/Text';
import Button from '../../core/components/Button';
import Spacer from '../../core/components/Spacer';

const CountrySelect = props => {
  const {t} = useTranslation();
  const theme = useTheme();
  const {onDismiss} = props;
  const countries = [
    {label: t(`countries.${COUNTRIES.AE}`), value: COUNTRIES.AE},
    {label: t(`countries.${COUNTRIES.IN}`), value: COUNTRIES.IN},
    {label: t(`countries.${COUNTRIES.PK}`), value: COUNTRIES.PK},
    {label: t(`countries.${COUNTRIES.EG}`), value: COUNTRIES.EG},
  ];
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();
  const countryState = useSelector(state => state.countrySelection);

  return (
    <FullScreenModal>
      <AppBody>
        <Text variant={TEXT_VARIANT.HEADING_2} color={theme.colors.primary}>
          {' '}
          {t('changeCountry')}
        </Text>
        <Spacer size={SpacerSizes.lg} />
        <FlatList
          data={countries}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedCountry(item.value);
              }}
              style={
                selectedCountry === item.value
                  ? styles.selectedCountry
                  : styles.language
              }>
              <Text
                variant={TEXT_VARIANT.TEXT_1}
                color={
                  selectedCountry === item.value
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
            dispatch(CountryActions.selectCountry(selectedCountry));
            onDismiss();
          }}>
          <Text color={theme.colors.surface} variant={TEXT_VARIANT.TEXT_1}>
            {t('save')}
          </Text>
        </Button>
      </AppBody>
    </FullScreenModal>
  );
};

const styles = StyleSheet.create({
  lang: {
    width: 365,
    left: 20,
    backgroundColor: '#FFFFFF',

    top: 40,
    bottom: 466,
    // border: 1px solid #E9EDF2;
    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderRadius: 16,
    borderStyle: 'solid',
  },
  sTitle1: {
    paddingTop: 34,

    fontStyle: 'normal',

    paddingLeft: 30,
    fontSize: 14,
    color: '#A8B4BF',
  },
  sTitle2: {
    paddingTop: 20,
    paddingBottom: 20,

    fontStyle: 'normal',
    paddingLeft: 30,
    fontSize: 12,

    color: '#576573',
  },
  languageItem: {
    height: 50,

    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  texts: {
    fontStyle: 'normal',
    color: '#576573',

    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  language: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedCountry: {
    padding: 10,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 14,
    color: '#576573',
  },
  selectedText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CountrySelect;
