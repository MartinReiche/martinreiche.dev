export function persistLocaleState(locale) {
  const previousLocale = window.localStorage.getItem('locale');
  if (previousLocale !== locale) window.localStorage.setItem('locale', locale);
}
export default persistLocaleState;
