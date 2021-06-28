import React from 'react';

import { VStack, HStack, Select, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import type { Languages as LanguagesType } from 'types/Language.types';

import { LanguagesProps } from './Languages.interface';

const mapLanguageToText: Record<LanguagesType, string> = {
  ru: 'Русский',
  en: 'Английский',
  fr: 'Французкий',
  de: 'Немецкий',
};

const allLanguages = Object.keys(mapLanguageToText) as LanguagesType[];

export const Languages = (props: LanguagesProps): JSX.Element => {
  const { languages } = props;

  const canAddLanguage =
    !props.readonly && languages.length < allLanguages.length;

  const languagesToAdd = allLanguages.filter(
    (lang) => languages.find((language) => language === lang) === undefined
  );

  const addLanguage = () => {
    if (props.readonly) {
      return;
    }

    const languageToAdd: LanguagesType = languagesToAdd[0];

    props.setLanguages([...languages, languageToAdd]);
  };

  const deleteLanguage = (lang: string) => () => {
    if (props.readonly) {
      return;
    }

    props.setLanguages(languages.filter((language) => language !== lang));
  };

  const handleLanguageChange =
    (idx: number): React.ChangeEventHandler<HTMLSelectElement> =>
    (e) => {
      if (props.readonly) {
        return;
      }

      props.setLanguages(
        languages.map((lang, index) => {
          if (index == idx) {
            return e.target.value as LanguagesType;
          }
          return lang as LanguagesType;
        })
      );
    };

  return (
    <VStack alignItems="flex-start">
      {languages.map((language, idx) => (
        <HStack spacing="5px" key={language}>
          <Select
            value={language}
            onChange={handleLanguageChange(idx)}
            disabled={props.readonly}
          >
            {languagesToAdd.concat([language]).map((l) => (
              <option value={l} key={l}>
                {mapLanguageToText[l]}
              </option>
            ))}
          </Select>

          {!props.readonly && (
            <DeleteIcon
              onClick={deleteLanguage(language)}
              _hover={{ cursor: 'pointer' }}
            />
          )}
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
