import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Center } from '@chakra-ui/react';

import { TextInput } from 'components/molecules/TextInput';
import { PageTemplate } from 'components/templates/PageTemplate';
import { AuthForm } from 'components/templates/AuthForm';

const schema = yup.object().shape({
  email: yup.string().email('email невалиден').required('email обязателен'),
  password: yup.string().required('пароль обязателен'),
});

type FormData = {
  email: string;
  password: string;
};

const LoginPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <PageTemplate>
      <Center width="100%" height="100%" paddingLeft="50px" paddingRight="50px">
        <AuthForm
          label="Вход работодателя"
          onSubmit={onSubmit}
          changeAuthMethodLink="/employer/register"
          changeAuthMethodText="У Вас еще нет аккаунта."
          changeRoleLink="/employee/login"
          changeRoleText="Вы являетесь соискателем."
        >
          <TextInput
            label="E-mail"
            id="email"
            type="email"
            placeholder="example@gmail.com"
            bgColor="white"
            color="black"
            labelColor="white"
            {...register('email')}
            error={errors.email?.message}
          />
          <TextInput
            label="Пароль"
            id="password"
            placeholder="example"
            bgColor="white"
            color="black"
            labelColor="white"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
        </AuthForm>
      </Center>
    </PageTemplate>
  );
};

export default LoginPage;
