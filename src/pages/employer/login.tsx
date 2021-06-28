import React from 'react';

import { login } from 'api/user';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Center, HStack } from '@chakra-ui/react';

import { TextInput } from 'components/molecules/TextInput';
import { PageTemplate } from 'components/templates/PageTemplate';
import { AuthForm } from 'components/templates/AuthForm';
import { Header } from '../../components/organisms/Header';
import { Logo } from '../../components/atoms/Logo';
import { default as Link } from 'next/dist/client/link';
import { getCompanyByUserId } from '../../api/company';

const schema = yup.object().shape({
  login: yup.string().required('email обязателен'),
  password: yup.string().required('пароль обязателен'),
});

type FormData = {
  login: string;
  password: string;
};

const LoginPage = (): JSX.Element => {
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
        role: 'hr',
      });
      try {
        await getCompanyByUserId(id);
      } catch (e) {
        await router.push(`/employer/entity`);
        return;
      }
      await router.push('/resumes');
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <PageTemplate>
      <Header
        leftChildren={
          <HStack spacing={{ base: '15px', lg: '75px' }}>
            <Logo />
            <Link href="/employers">Работодателям</Link>
          </HStack>
        }
        bgColor="transparent"
      />

      <Center width="100%" height="100%">
        <AuthForm
          label="Вход работодателя"
          onSubmit={onSubmit}
          changeAuthMethodLink="/employer/register"
          changeAuthMethodText="У Вас еще нет аккаунта."
          changeRoleLink="/employee/login"
          changeRoleText="Вы являетесь соискателем."
        >
          <TextInput
            label="Логин"
            id="login"
            placeholder="example"
            bgColor="white"
            color="black"
            labelColor="white"
            {...register('login')}
            error={errors.login?.message}
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
