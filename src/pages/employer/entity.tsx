import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NumberFormat from 'react-number-format';

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
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
