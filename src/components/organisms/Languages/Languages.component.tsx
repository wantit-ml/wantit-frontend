import React from 'react';

import { VStack, HStack, Select, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import type { Languages as LanguagesType, Level } from 'types/Language.types';

import { LanguagesProps } from './Languages.interface';

const mapLanguageToText: Record<LanguagesType, string> = {
  english: 'Английский',
  french: 'Французкий',
  german: 'Немецкий',
};

const allLanguages = Object.keys(mapLanguageToText) as LanguagesType[];

const mapLevelToText: Record<Level, string> = {
  A1: 'A1 - новичок',
  A2: 'A2 - элементарный',
  B1: 'B1 - ниже среднего',
  B2: 'B2 - средний',
  C1: 'C1 - выше среднего',
  C2: 'C2 - продвинутый',
};

export const Languages = ({
  languages,
  setLanguages,
}: LanguagesProps): JSX.Element => {
  const canAddLanguage = languages.length < allLanguages.length;

  const addLanguage = () => {
    const languageToAdd: LanguagesType = allLanguages.filter(
      (lang) =>
        languages.filter(({ language }) => language === lang).length === 0
    )[0];
    setLanguages([...languages, { language: languageToAdd, level: 'A1' }]);
  };

  const deleteLanguage = (lang: string) => () => {
    setLanguages(languages.filter((language) => language.language !== lang));
  };

  return (
    <VStack alignItems="flex-start">
      {languages.map((language) => (
        <HStack spacing="5px" key={language.language}>
          <Select value={language.language}>
            {Object.entries(mapLanguageToText).map(([level, text]) => (
              <option value={level} key={level}>
                {text}
              </option>
            ))}
          </Select>

          <Select value={language.level}>
            {Object.entries(mapLevelToText).map(([level, text]) => (
              <option value={level} key={level}>
                {text}
              </option>
            ))}
          </Select>

          <DeleteIcon
            onClick={deleteLanguage(language.language)}
            _hover={{ cursor: 'pointer' }}
          />
        </HStack>
      ))}

      {canAddLanguage && (
        <Button
          variant="link"
          color="black"
          textDecoration="none"
          fontWeight="medium"
          _hover={{ textDecoration: 'none' }}
          _active={{ focus: 'none' }}
          onClick={addLanguage}
        >
          Добавить язык
        </Button>
      )}
    </VStack>
  );
};
