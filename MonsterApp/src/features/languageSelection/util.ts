import {LANGUAGES} from '../../core/constants';

const rtlList = [LANGUAGES.AR];

export const isRTLLanguage = (language: LANGUAGES) =>
  rtlList.includes(language);
