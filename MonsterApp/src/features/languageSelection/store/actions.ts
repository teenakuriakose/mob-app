export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

export const selectLanguage = (lang: string) => ({
  type: SELECT_LANGUAGE,
  payload: lang,
});
