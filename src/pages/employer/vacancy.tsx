import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useUser } from 'hooks/useUser.hook';

import { createVacancy } from 'api/vacancy';

import NumberFormat from 'react-number-format';
import MDEditor from '@uiw/react-md-editor';

import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
  Text,
} from '@chakra-ui/react';

import { Currency } from 'types/Currency.types';
import { Languages as LanguagesTypes } from 'types/Language.types';
import { Employment } from 'types/Schedule.types';

import { TextInput } from 'components/molecules/TextInput';
import { Salary } from 'components/organisms/Salary';
import { Skills } from 'components/organisms/Skills';
import { Languages } from 'components/organisms/Languages';
import { PageTemplate } from 'components/templates/PageTemplate';
import { FormSection } from 'components/templates/FormSection';

const schema = yup.object().shape({
  title: yup.string().required('название обязательно'),
  description: yup.string().required('описание обязательно'),
  salary: yup
    .string()
    .matches(/^[0-9]*$/, 'зарплата невалидна')
    .required('зарплата обязательна'),
  contactPerson: yup.string().required('контактное лицо обязательно'),
  email: yup.string().email('email невалиден').required('email обязателен'),
  phone: yup
    .string()
    .test('valid', 'телефон невалиден', (value) => !value?.includes('_'))
    .required('телефон обязателен'),
  city: yup.string().required('город обязателен'),
  comment: yup.string(),
});

type FormData = {
  title: string;
  description: string;
  salary: number;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  comment: string;
};

const defaultDescription = `
**Обязанности:**
 - Обязанность

**Требования:**
 - Требование

**Условия:**
 - Условие
`;

const VacancyPage = (): JSX.Element => {
  const [skills, setSkills] = useState<string[]>(['']);
  const [currency, setCurrency] = useState<Currency>('rub');
  const [languages, setLanguages] = useState<LanguagesTypes[]>(['en']);
  const [employment, setEmployment] = useState<Employment>('part-time');

  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { description: defaultDescription },
  });

  const { user } = useUser({ redirectTo: '/employer/login' });

  const onSubmit = handleSubmit(async (data) => {
    if (!user) {
      return;
    }

    await createVacancy({
      phone: data.phone,
      description: data.description,
      vacancy_code: '',
      title: data.title,
      email: data.email,
      user_identifier: user.id,
      salary: data.salary,
      foreign_languages: languages,
      city: data.city,
      address: data.city,
      type_of_vacancy: employment,
      stack: skills,
      currency,
      author: '',
    });

    await router.push('/resumes');
  });

  return (
    <PageTemplate title="Новая вакансия">
      <VStack maxW="3xl" w="100%" spacing="90px">
        <FormSection label="Основная информация">
          <TextInput
            id="title"
            label="Название вакансии"
            placeholder="Junior Java разработчик"
            {...register('title')}
            error={errors.title?.message}
          />

          <FormControl>
            <Text id="skills-label">Навыки</Text>
            <Skills skills={skills} setSkills={setSkills} />
          </FormControl>

          <FormControl>
            <FormLabel id="description-label" htmlFor="description">
              Описание
            </FormLabel>
            <MDEditor
              value={watch('description')}
              onChange={(value) => setValue('description', value ?? '')}
              id="description"
            />
          </FormControl>

          <Salary
            label="Предполагаемый  уровень дохода"
            currency={currency}
            setCurrency={setCurrency}
            value={String(watch('salary'))}
            setValue={(v) => setValue('salary', Number(v))}
            error={errors.salary?.message}
          />

          <FormControl>
            <FormLabel>Иностранные языки</FormLabel>
            <Languages languages={languages} setLanguages={setLanguages} />
          </FormControl>
        </FormSection>

        <FormSection label="Дополнительно">
          <TextInput
            label="Вакансия в городе"
            id="city"
            placeholder="Москва"
            {...register('city')}
            error={errors.city?.message}
          />
        </FormSection>

        <FormSection label="Дополнительно">
          <FormControl>
            <FormLabel id="employment-label" htmlFor="employment">
              Тип занятости
            </FormLabel>
            <RadioGroup
              onChange={(e: string) => setEmployment(e as Employment)}
              value={employment}
              id="employment"
            >
              <VStack alignItems="flex-start">
                <Radio
                  name="employment-full-time"
                  id="employment-full-time"
                  value="full-time"
                >
                  Полная занятость
                </Radio>
                <Radio
                  name="employment-part-time"
                  id="employment-part-time"
                  value="part-time"
                >
                  Частичная занятость
                </Radio>
                <Radio
                  name="employment-project"
                  id="employment-project"
                  value="project"
                >
                  Проектная работа или разовое задание
                </Radio>
                <Radio
                  name="employment-intership"
                  id="employment-intership"
                  value="internship"
                >
                  Стажировка
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>
        </FormSection>

        <FormSection label="Контактные данные">
          <TextInput
            id="contact-person"
            {...register('contactPerson')}
            error={errors.contactPerson?.message}
            label="Контактное лицо"
            placeholder="Иван Иванов"
          />

          <TextInput
            id="email"
            label="Email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="example@gmail.com"
          />

          <NumberFormat
            format="+7 (###) ###-##-##"
            mask="_"
            {...register('phone')}
            customInput={(props) => {
              return (
                <TextInput
                  id="phone"
                  label="Телефон"
                  placeholder="+7 (999) 999-99-99"
                  {...props}
                  error={errors.phone?.message}
                />
              );
            }}
          />

          <TextInput
            label="Комментарий"
            id="comment"
            {...register('comment')}
            error={errors.comment?.message}
            placeholder="Например, “удобное время для звонка”"
          />
        </FormSection>
      </VStack>

      <Button
        onClick={onSubmit}
        color="white"
        bgColor="green.500"
        _hover={{ bgColor: 'green.600' }}
        _active={{ bgColor: 'green.600' }}
        mt="215px !important"
        mb="70px !important"
      >
        Сохранить
      </Button>
    </PageTemplate>
  );
};

export default VacancyPage;
