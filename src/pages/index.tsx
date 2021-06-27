import React from 'react';

import { useRouter } from "next/router";
import { default as Link } from 'next/link';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';

import { Heading, Text, VStack, Button, HStack } from "@chakra-ui/react";

import {Logo} from 'components/atoms/Logo';
import { Header } from "components/organisms/Header";
import { PageTemplate } from 'components/templates/PageTemplate';
import { HeaderAuth } from "../components/molecules/HeaderAuth";

const EmployeesPage = () => {
  const router = useRouter();

  useHtmlClassname('with-main-background');

  return (
    <PageTemplate>
      <Header
        leftChildren={(
          <HStack spacing='75px'>
            <Logo />
            <Link href='/'>Главная</Link>
            <Link href='/vacancies'>Вакансии</Link>
            <Link href='/employers'>Работодателям</Link>
          </HStack>
        )}
        rightChildren={<HeaderAuth isHr={false} isAuthorized={false} />}
        bgColor='transparent'
      />

      <VStack alignItems="flex-start" width="100%" padding="0 50px">
        <Heading color="green.900" as="h1" fontSize="200px" lineHeight="1">
          WantIT
        </Heading>

        <Text maxWidth="700px" mb="55px !important" fontSize="30px">
          Вы амбициозный молодой специалист, жаждущий войти в IT?
        </Text>

        <Text maxWidth="700px" mb="75px !important" fontSize="30px">
          Мы поможем Вам в этом. <br /> Давайте начнем!
        </Text>

        <Button
          color="white"
          padding="6px 24px"
          bg="green.500"
          _hover={{ bg: 'green.500' }}
          _active={{ bg: 'green.500' }}
          onClick={() => router.push('/employee/register')}
        >
          Зарегистрироваться
        </Button>
      </VStack>
    </PageTemplate>
  );
};

export default EmployeesPage;
