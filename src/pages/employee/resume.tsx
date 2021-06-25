import React, { useState } from 'react';

import {
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  Button,
} from '@chakra-ui/react';

import { Languages as LanguagesTypes } from 'types/Language.types';

import { TextInput } from 'components/molecules/TextInput';
import { Languages } from 'components/organisms/Languages';
import { Salary } from 'components/organisms/Salary';
import { Skills } from 'components/organisms/Skills';
import { FormSection } from 'components/templates/FormSection';
import { PageTemplate } from 'components/templates/PageTemplate';

const ResumePage = () => {
  const [skills, setSkills] = useState<string[]>(['']);
  const [languages, setLanguages] = useState<LanguagesTypes[]>(['english']);

  return (
    <PageTemplate title="Резюме">
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

          <Salary
            label="Желаемая зарплата"
            value={0}
            setFrom={() => undefined}
            to={1000}
            setTo={() => undefined}
            currency="rub"
            setCurrency={() => undefined}
          />

          <FormControl>
            <FormLabel>Навыки</FormLabel>
            <Skills skills={skills} setSkills={setSkills} />
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
        onClick={() => undefined}
        color="white"
        bgColor="green.500"
        _hover={{ bgColor: 'green.600' }}
        _active={{ bgColor: 'green.600' }}
      >
        Сохранить
      </Button>
    </PageTemplate>
  );
};

export default ResumePage;
