import {combineReducers} from 'redux';
import signInReducer from '../features/SignIn/store/reducer';
import LanguageReducer from '../features/LanguageSelection/store/reducer';
import CountryReducer from '../features/CountrySelection/store/reducer';

const appReducer = combineReducers({
  user: signInReducer,
  languageSelection: LanguageReducer,
  countrySelection: CountryReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
