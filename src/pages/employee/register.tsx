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
  login: yup.string().required('логин обязателен'),
  password: yup.string().required('пароль обязателен'),
});

type FormData = {
  email: string;
  login: string;
  password: string;
};

const EmployeeRegisterPage = (): JSX.Element => {
  const {
    formState: { errors },
    handleSubmit,
    register,
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
          label="Регистрация соискателя"
          onSubmit={onSubmit}
          changeAuthMethodLink="/employee/login"
          changeAuthMethodText="У Вас уже есть аккаунт."
          changeRoleLink="/employer/register"
          changeRoleText="Вы являетесь работодателем."
        >
          <TextInput
            label="E-mail"
            type="email"
            id="email"
            placeholder="example@gmail.com"
            bgColor="white"
            color="black"
            labelColor="white"
            {...register('email')}
            error={errors.email?.message}
          />
          <TextInput
            id="login"
            label="Логин"
            placeholder="example"
            bgColor="white"
            color="black"
            labelColor="white"
            {...register('login')}
            error={errors.login?.message}
          />
          <TextInput
            id="password"
            label="Пароль"
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

export default EmployeeRegisterPage;
