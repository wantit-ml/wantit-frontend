import React from 'react';

import { VStack, HStack, Select, Button, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import type { Languages as LanguagesType } from 'types/Language.types';

import { LanguagesProps } from './Languages.interface';

const mapLanguageToText: Record<LanguagesType, string> = {
  russian: 'Русский',
  english: 'Английский',
  french: 'Французкий',
  german: 'Немецкий',
};

const allLanguages = Object.keys(mapLanguageToText) as LanguagesType[];

export const Languages = (props: LanguagesProps): JSX.Element => {
  const { languages } = props;

  const canAddLanguage =
    !props.readonly && languages.length < allLanguages.length;

  const addLanguage = () => {
    if (props.readonly) {
      return;
    }

    const languageToAdd: LanguagesType = allLanguages.filter(
      (lang) => languages.filter((language) => language === lang).length === 0
    )[0];

    props.setLanguages([...languages, languageToAdd]);
  };

  const deleteLanguage = (lang: string) => () => {
    if (props.readonly) {
      return;
    }

    props.setLanguages(languages.filter((language) => language !== lang));
  };

  return (
    <VStack alignItems="flex-start">
      {languages.map((language) => (
        <HStack spacing="5px" key={language}>
          <Select value={language}>
            {Object.entries(mapLanguageToText).map(([language, text]) =>
              props.readonly ? (
                <Text key={language}>{text}</Text>
              ) : (
                <option value={language} key={language}>
                  {text}
                </option>
              )
            )}
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
