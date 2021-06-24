export type Languages = 'english' | 'french' | 'german';

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type LanguageWithLevel = {
  language: Languages;
  level: Level;
};
