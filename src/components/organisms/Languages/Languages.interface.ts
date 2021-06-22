import { LanguageWithLevel } from 'types/Language.types';

export type LanguagesProps = {
  languages: LanguageWithLevel[];
  setLanguages: (languages: LanguageWithLevel[]) => void;
};
