import React from 'react';

import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NumberFormat from 'react-number-format';

import { createUser } from 'api/user';
import { Center, HStack } from '@chakra-ui/react';
import { TextInput } from 'components/molecules/TextInput';
import { PageTemplate } from 'components/templates/PageTemplate';
import { AuthForm } from 'components/templates/AuthForm';
import { Header } from '../../components/organisms/Header';
import { Logo } from '../../components/atoms/Logo';
import { default as Link } from 'next/dist/client/link';

const schema = yup.object().shape({
  email: yup.string().email('email невалиден').required('email обязателен'),
  login: yup.string().required('логин обязателен'),
  phone: yup
    .string()
    .test('valid', 'телефон невалиден', (value) => !value?.includes('_'))
    .required('телефон обязателен'),
  password: yup.string().required('пароль обязателен'),
});

type FormData = {
  email: string;
  login: string;
  phone: string;
  password: string;
};

const EmployeeRegisterPage = (): JSX.Element => {
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUser({
        email: data.email,
        username: data.login,
        phone: data.phone
          .replaceAll(' ', '')
          .replaceAll('-', '')
          .replaceAll('(', '')
          .replaceAll(')', ''),
        password: data.password,
        role: 'user',
      });
      await router.push('/employee/login');
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
          label="Регистрация соискателя"
          onSubmit={onSubmit}
          changeAuthMethodLink="/employee/login"
          changeAuthMethodText="У Вас уже есть аккаунт."
          changeRoleLink="/employer/register"
          changeRoleText="Вы являетесь работодателем."
        >
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
                  bgColor="white"
                  color="black"
                  labelColor="white"
                  {...props}
                  error={errors.phone?.message}
                />
              );
            }}
          />
        </AuthForm>
      </Center>
    </PageTemplate>
  );
};

export default EmployeeRegisterPage;
