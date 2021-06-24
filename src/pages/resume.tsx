import React, { useState } from 'react';

import {
  Heading,
  VStack,
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  RadioGroup,
  Radio,
  HStack,
  Select,
  Button,
} from '@chakra-ui/react';

import { LanguageWithLevel } from 'types/Language.types';

import { TextInput } from 'components/molecules/TextInput';
import { Specializations } from 'components/organisms/Specializations';
import { Languages } from 'components/organisms/Languages';
import { FormSection } from 'components/templates/FormSection';

const ONE_MILLION = 1_000_000;

const RegistrationPage = () => {
  const [specializations, setSpecializations] = useState<string[]>(['']);
  const [languages, setLanguages] = useState<LanguageWithLevel[]>([
    { language: 'english', level: 'A1' },
  ]);

  return (
    <VStack mt="calc(75px + 125px)">
      <Box maxW="3xl" w="100%" mb="25px">
        <Heading as="h2" size="2xl">
          Резюме
        </Heading>
      </Box>

      <VStack maxW="3xl" w="100%" spacing="90px">
        <FormSection label="Контактные данные">
          <TextInput label="Имя" placeholder="Иван" />
          <TextInput label="Фамилия" placeholder="Иванович" />
          <TextInput
            label="Мобильный телефон"
            placeholder="+7 (999) 999-99-99"
          />
        </FormSection>

        <FormSection label="Основная информация">
          <TextInput label="Дата рождения" placeholder="Иван" />

          <FormControl>
            <FormLabel>Пол</FormLabel>
            <RadioGroup onChange={() => undefined} value="male">
              <HStack>
                <Radio value="male">Мужской</Radio>
                <Radio value="female">Женский</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <TextInput label="Гражданство" placeholder="Россия" />
          <TextInput label="Дата Город проживания" placeholder="Москва" />
        </FormSection>

        <FormSection label="Специальность">
          <TextInput
            label="Желаемая должность"
            placeholder="Junior Java разработчик"
          />

          <FormControl>
            <FormLabel>Желамая зарплата</FormLabel>

            <HStack>
              <NumberInput
                min={1}
                max={ONE_MILLION}
                flex="3"
                defaultValue={40000}
              >
                <NumberInputField type="number" />
              </NumberInput>

              <Select
                variant="rub"
                flex="1"
                bgColor="white"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="inherit"
              >
                <option value="rub">руб.</option>
                <option value="usd">долларов</option>
                <option value="eur">евро</option>
              </Select>
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Специализации</FormLabel>
            <Specializations
              specializations={specializations}
              setSpecializations={setSpecializations}
            />
          </FormControl>
        </FormSection>

        <FormSection label="Текущее образование">
          <FormControl>
            <RadioGroup onChange={() => undefined} value="school">
              <HStack>
                <Radio value="school">Школа</Radio>
                <Radio value="university">Универститет</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <TextInput label="Школа" placeholder="МАУ СОШ №1" />

          <FormControl>
            <FormLabel>Иностранный язык</FormLabel>
            <Languages languages={languages} setLanguages={setLanguages} />
          </FormControl>
        </FormSection>

        <FormSection label="Прочее">
          <FormControl>
            <FormLabel>Переезд</FormLabel>
            <RadioGroup onChange={() => undefined} value="impossible">
              <HStack>
                <Radio value="possible">Возможен</Radio>
                <Radio value="impossible">Невозможен</Radio>
                <Radio value="unwanted">Нежелателен</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <TextInput label="Станция метро" placeholder="Московская" />
        </FormSection>

        <FormSection label="Контактные данные">
          <TextInput label="Telegram" placeholder="@example" />
          <TextInput label="Вконтакте" placeholder="vk.com/example" />
          <TextInput label="Github" placeholder="github.com/example" />
        </FormSection>
      </VStack>

      <Button
        onClick={() => history.push('/')}
        color="white"
        bgColor="green.500"
        _hover={{ bgColor: 'green.600' }}
        _active={{ bgColor: 'green.600' }}
      >
        Сохранить
      </Button>
    </VStack>
  );
};

export default RegistrationPage;
