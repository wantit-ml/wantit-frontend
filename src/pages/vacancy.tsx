import React, { useState } from 'react';

import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
} from '@chakra-ui/react';

import { TextInput } from 'components/molecules/TextInput';
import { Salary } from 'components/organisms/Salary';
import { Skills } from 'components/organisms/Skills';
import { PageTemplate } from 'components/templates/PageTemplate';
import { FormSection } from 'components/templates/FormSection';

const VacancyPage = (): JSX.Element => {
  const [skills, setSkills] = useState<string[]>(['']);

  return (
    <PageTemplate title="Новая вакансия">
      <VStack maxW="3xl" w="100%" spacing="90px">
        <FormSection label="Основная информация">
          <TextInput
            label="Название вакансии"
            placeholder="Junior Java разработчик"
          />

          <FormControl>
            <FormLabel>Навыки</FormLabel>
            <Skills skills={skills} setSkills={setSkills} />
          </FormControl>

          <Salary
            label="Предполагаемый  уровень дохода"
            from={0}
            setFrom={() => undefined}
            to={1000}
            setTo={() => undefined}
            currency="rub"
            setCurrency={() => undefined}
          />
        </FormSection>

        <FormSection label="Дополнительно">
          <FormControl>
            <FormLabel>Тип занятости</FormLabel>
            <RadioGroup onChange={() => undefined} value="part-time">
              <VStack alignItems="flex-start">
                <Radio value="full-time">Полная занятость</Radio>
                <Radio value="part-time">Частичная занятость</Radio>
                <Radio value="project">
                  Проектная работа или разовое задание
                </Radio>
                <Radio value="internship">Стажировка</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </FormSection>

        <FormSection label="Контактные данные">
          <TextInput label="Контактное лицо" placeholder="Иван Иванов" />
          <TextInput label="Email" placeholder="example@gmail.com" />
          <TextInput label="Телефон" placeholder="+7 (999) 999-99-99" />
          <TextInput
            label="Комментарий"
            placeholder="Например, “удобное время для звонка”"
          />
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
    </PageTemplate>
  );
};

export default VacancyPage;
