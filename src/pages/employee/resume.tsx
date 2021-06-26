import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NumberFormat from 'react-number-format';

import {
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  Button,
} from '@chakra-ui/react';

import { Currency } from 'types/Currency.types';
import { Languages as LanguagesTypes } from 'types/Language.types';

import { TextInput } from 'components/molecules/TextInput';
import { Languages } from 'components/organisms/Languages';
import { Salary } from 'components/organisms/Salary';
import { Skills } from 'components/organisms/Skills';
import { FormSection } from 'components/templates/FormSection';
import { PageTemplate } from 'components/templates/PageTemplate';

const schema = yup.object({
  name: yup.string().required('имя обязательно'),
  surname: yup.string().required('фамилия обязательна'),
  phone: yup
    .string()
    .test('valid', 'телефон невалиден', (value) => !value?.includes('_'))
    .required('телефон обязателен'),
  birthday: yup
    .string()
    .test('valid', 'дата рождения невалидна', (value) => !value?.includes('_'))
    .required('дата рождения обязательна'),
  citizenship: yup.string().required('гражданство обязательно'),
  city: yup.string().required('город обязателен'),
  label: yup.string().required('должность обязательна'),
  salary: yup
    .string()
    .matches(/^[0-9]*$/, 'зарплата невалидна')
    .required('зарплата обязательна'),
  education: yup.string().required('место обучения обязательно'),
  metroStation: yup.string(),
  telegram: yup
    .string()
    .test('valid', 'хэндл невалиден', (value) =>
      Boolean(value?.startsWith('@') && value !== '@')
    ),
  vk: yup
    .string()
    .test(
      'valid',
      'ссылка невалидна',
      (value) => Boolean(value?.startsWith('vk.com/')) && value !== 'vk.com/'
    ),
  github: yup
    .string()
    .test('valid', 'ссылка невалидна', (value) =>
      Boolean(value?.startsWith('github.com/') && value !== 'github.com/')
    ),
});

type FormData = {
  name: string;
  surname: string;
  phone: string;
  birthday: string;
  citizenship: string;
  city: string;
  label: string;
  salary: string;
  education: string;
  metroStation: string;
  telegram: string;
  vk: string;
  github: string;
};

const ResumePage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [skills, setSkills] = useState<string[]>(['']);
  const [gender, setGender] = useState<string>('male');
  const [currency, setCurrency] = useState<Currency>('rub');
  const [typeOfEducation, setTypeOfEducation] = useState('school');
  const [languages, setLanguages] = useState<LanguagesTypes[]>(['english']);
  const [moving, setMoving] = useState('impossible');

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <PageTemplate title="Резюме">
      <VStack maxW="3xl" w="100%" spacing="90px">
        <FormSection label="Контактные данные">
          <TextInput
            id="name"
            label="Имя"
            placeholder="Иван"
            {...register('name')}
            error={errors.name?.message}
          />
          <TextInput
            id="surname"
            label="Фамилия"
            placeholder="Иванович"
            {...register('surname')}
            error={errors.surname?.message}
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
        </FormSection>

        <FormSection label="Основная информация">
          <NumberFormat
            format="##/##/####"
            mask="_"
            {...register('birthday')}
            customInput={(props) => (
              <TextInput
                id="birthday"
                label="Дата рождения"
                placeholder="00/00/0000"
                {...props}
                error={errors.birthday?.message}
              />
            )}
          />

          <FormControl>
            <FormLabel id="gender-label" htmlFor="gender">
              Пол
            </FormLabel>
            <RadioGroup onChange={setGender} value={gender} id="gender">
              <HStack>
                <Radio id="gender-male" value="male">
                  Мужской
                </Radio>
                <Radio id="gender-female" value="female">
                  Женский
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <TextInput
            id="citizenship"
            error={errors.citizenship?.message}
            {...register('citizenship')}
            label="Гражданство"
            placeholder="Россия"
          />
          <TextInput
            id="city"
            error={errors.city?.message}
            {...register('city')}
            label="Город проживания"
            placeholder="Москва"
          />
        </FormSection>

        <FormSection label="Специальность">
          <TextInput
            label="Желаемая должность"
            placeholder="Junior Java разработчик"
            id="label"
            {...register('label')}
            error={errors.label?.message}
          />

          <Salary
            label="Желаемая зарплата"
            currency={currency}
            setCurrency={setCurrency}
            value={watch('salary')}
            setValue={(v) => setValue('salary', v)}
            error={errors.salary?.message}
          />

          <FormControl>
            <FormLabel>Навыки</FormLabel>
            <Skills skills={skills} setSkills={setSkills} />
          </FormControl>
        </FormSection>

        <FormSection label="Текущее образование">
          <FormControl>
            <RadioGroup onChange={setTypeOfEducation} value={typeOfEducation}>
              <HStack>
                <Radio id="education-school" value="school">
                  Школа
                </Radio>
                <Radio id="education-university" value="university">
                  Универститет
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <TextInput
            id="education-place"
            {...register('education')}
            error={errors.education?.message}
            label={typeOfEducation === 'school' ? 'Школа' : 'Университет'}
            placeholder={
              typeOfEducation === 'school' ? 'МАУ СОШ №1' : 'ФГАОУ ВО УрФУ'
            }
          />

          <FormControl>
            <FormLabel>Иностранные языки</FormLabel>
            <Languages languages={languages} setLanguages={setLanguages} />
          </FormControl>
        </FormSection>

        <FormSection label="Прочее">
          <FormControl>
            <FormLabel id="moving-label" htmlFor="moving">
              Переезд
            </FormLabel>
            <RadioGroup id="moving" onChange={setMoving} value={moving}>
              <HStack>
                <Radio id="moving-possible" value="possible">
                  Возможен
                </Radio>
                <Radio id="moving-impossible" value="impossible">
                  Невозможен
                </Radio>
                <Radio id="moving-unwanted" value="unwanted">
                  Нежелателен
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <TextInput
            id="metro"
            {...register('metroStation')}
            error={errors.metroStation?.message}
            label="Станция метро"
            placeholder="Московская"
          />
        </FormSection>

        <FormSection label="Контактные данные">
          <TextInput
            id="telegeram"
            {...register('telegram')}
            error={errors.telegram?.message}
            label="Telegram"
            placeholder="@example"
          />
          <TextInput
            id="vk"
            {...register('vk')}
            error={errors.vk?.message}
            label="Вконтакте"
            placeholder="vk.com/example"
          />
          <TextInput
            id="github"
            {...register('github')}
            error={errors.github?.message}
            label="Github"
            placeholder="github.com/example"
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

export default ResumePage;
