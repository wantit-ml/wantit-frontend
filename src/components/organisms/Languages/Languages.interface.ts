import { Languages } from 'types/Language.types';

export type LanguagesProps = {
  languages: Languages[];
} & (
  | {
      setLanguages: (languages: Languages[]) => void;
      readonly?: false;
    }
  | {
      readonly: true;
    }
);
