import React from 'react';

import { Center } from '@chakra-ui/react';

import { TextInput } from 'components/molecules/TextInput';
import { PageTemplate } from 'components/templates/PageTemplate';
import { AuthForm } from 'components/templates/AuthForm';

const LoginPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Center width="100%" height="100%" paddingLeft="50px" paddingRight="50px">
        <AuthForm
          label="Вход работодателя"
          onButtonClick={() => undefined}
          changeAuthMethodLink="/employer/register"
          changeAuthMethodText="У Вас еще нет аккаунта."
          changeRoleLink="/employee/login"
          changeRoleText="Вы являетесь соискателем."
        >
          <TextInput
            label="E-mail"
            placeholder="example@gmail.com"
            bgColor="white"
            color="black"
            labelColor="white"
          />
          <TextInput
            label="Пароль"
            placeholder="example"
            bgColor="white"
            color="black"
            labelColor="white"
            type="password"
          />
        </AuthForm>
      </Center>
    </PageTemplate>
  );
};

export default LoginPage;
