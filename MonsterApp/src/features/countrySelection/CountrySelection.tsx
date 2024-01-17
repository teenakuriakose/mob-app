import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import i18next from 'i18next';
import {useDispatch, useSelector} from 'react-redux';
import * as CountryActions from './store/actions';
import {useTheme} from 'react-native-paper';
import FullScreenModal from '../core/components/FullScreenModal';

const CountrySelect = props => {
  const {t} = useTranslation();
  const theme = useTheme();
  const {onDismiss} = props;
  const languages = [
    {label: 'United Arab Emirates', value: 'AE'},
    {label: 'India', value: 'IN'},

    // Add more languages as needed
  ];
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();
  const countryState = useSelector(state => state.countrySelection);

  return (
    <FullScreenModal>
      <View style={styles.lang}>
        <Text style={styles.sTitle1}> {t('country')}</Text>

        <FlatList
          data={languages}
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
                style={
                  selectedCountry === item.value
                    ? styles.selectedText
                    : styles.text
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.btns}>
          <TouchableOpacity
            style={{
              width: 143,
              height: 48,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: theme.colors.primary,
              borderStyle: 'solid',
            }}>
            <Text
              style={{
                fontStyle: 'normal',

                color: theme.colors.primary,
              }}>
              {t('CANCEL')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(CountryActions.selectCountry(selectedCountry));
              onDismiss();
            }}
            style={{
              width: 150,
              height: 48,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.primary,
            }}>
            <Text
              style={{
                color: theme.colors.surface,

                fontStyle: 'normal',
              }}>
              {t('SAVE')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
