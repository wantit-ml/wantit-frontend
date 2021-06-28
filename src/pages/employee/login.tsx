import React from 'react';

import { useRouter } from 'next/router';
import { default as Link } from 'next/link';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getAbout, login } from 'api/user';

import { Center, HStack } from '@chakra-ui/react';

import { Logo } from 'components/atoms/Logo';
import { TextInput } from 'components/molecules/TextInput';
import { Header } from 'components/organisms/Header';
import { PageTemplate } from 'components/templates/PageTemplate';
import { AuthForm } from 'components/templates/AuthForm';

const schema = yup.object().shape({
  login: yup.string().required('login обязателен'),
  password: yup.string().required('пароль обязателен'),
});

type FormData = {
  login: string;
  password: string;
};

const EmployeeLoginPage = (): JSX.Element => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { id } = await login({
        username: data.login,
        password: data.password,
        role: 'user',
      });

      try {
        await getAbout(id);
      } catch (e) {
        await router.push(`/employee/resume`);
        return;
      }

      await router.push('/vacancies');
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <PageTemplate>
      <Header
        leftChildren={
          <HStack spacing="75px">
            <Logo />
            <Link href="/">Главная</Link>
          </HStack>
        }
        bgColor="transparent"
      />

      <Center width="100%" height="100%" paddingLeft="50px" paddingRight="50px">
        <AuthForm
          label="Вход соискателя"
          onSubmit={onSubmit}
          changeAuthMethodLink="/employee/register"
          changeAuthMethodText="У Вас еще нет аккаунта."
          changeRoleLink="/employer/login"
          changeRoleText="Вы являетесь работодателем."
        >
          <TextInput
            label="Логин"
            placeholder="example"
            bgColor="white"
            color="black"
            labelColor="white"
            id="login"
            {...register('login')}
            error={errors.login?.message}
          />
          <TextInput
            label="Пароль"
            placeholder="example"
            bgColor="white"
            color="black"
            labelColor="white"
            type="password"
            id="password"
            {...register('password')}
            error={errors.password?.message}
          />
        </AuthForm>
      </Center>
    </PageTemplate>
  );
};

export default EmployeeLoginPage;
