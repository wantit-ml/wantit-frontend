import React from 'react';

import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { createCompany } from 'api/company';

import NumberFormat from 'react-number-format';

import { useUser } from 'hooks/useUser.hook';

import { Button, VStack } from '@chakra-ui/react';

import { TextInput } from 'components/molecules/TextInput';
import { PageTemplate } from 'components/templates/PageTemplate';
import { FormSection } from 'components/templates/FormSection';

const schema = yup.object().shape({
  entity: yup.string().required('юр. лицо обязательно'),
  city: yup.string().required('город обязателен'),
  address: yup.string().required('юр. адрес обязателен'),
  phone: yup
    .string()
    .test('valid', 'телефон невалиден', (value) => !value?.includes('_'))
    .required('телефон обязателен'),
});

type FormData = {
  entity: string;
  city: string;
  address: string;
  phone: string;
};

const EntityPage = (): JSX.Element => {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { user } = useUser({ redirectTo: '/employer/login' });

  const onSubmit = handleSubmit(async (data) => {
    if (!user) {
      return;
    }

    await createCompany({
      user_identifier: user.id,
      address: data.address,
      city: data.city,
      description: '',
      email: user.email,
      phone: data.phone
        .replaceAll(' ', '')
        .replaceAll('-', '')
        .replaceAll('(', '')
        .replaceAll(')', ''),
      title: data.entity,
    });

    await router.push('/resumes');
  });

  return (
    <PageTemplate title="Юридическое лицо">
      <VStack maxW="3xl" w="100%" spacing="90px">
        <FormSection label="Основная информация">
          <TextInput
            id="entity"
            label="Юридическое лицо"
            placeholder="Юридическое лицо"
            {...register('entity')}
            error={errors.entity?.message}
          />
          <TextInput
            id="city"
            label="Город"
            placeholder="Москва"
            {...register('city')}
            error={errors.city?.message}
          />
          <TextInput
            id="address"
            label="Юридический адрес"
            placeholder="Юридический адрес"
            {...register('address')}
            error={errors.address?.message}
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

export default EntityPage;
