import React from 'react';

import { Center } from '@chakra-ui/react';

import { TextInput } from 'components/molecules/TextInput';
import { PageTemplate } from 'components/templates/PageTemplate';
import { AuthForm } from 'components/templates/AuthForm';

const EmployeeRegisterPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Center width="100%" height="100%" paddingLeft="50px" paddingRight="50px">
        <AuthForm
          label="Вход соискателя"
          onButtonClick={() => undefined}
          changeAuthMethodLink="/employee/register"
          changeAuthMethodText="У Вас еще нет аккаунта."
          changeRoleLink="/employer/login"
          changeRoleText="Вы являетесь работодателем."
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

export default EmployeeRegisterPage;
