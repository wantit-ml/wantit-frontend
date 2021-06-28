import React from 'react';

import { default as Link } from 'next/link';
import { useRouter } from 'next/router';

import { Heading, Text, VStack, Button, HStack } from '@chakra-ui/react';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';

import { Logo } from 'components/atoms/Logo';
import { PageTemplate } from 'components/templates/PageTemplate';
import { Header } from 'components/organisms/Header';
import { HeaderAuth } from '../components/molecules/HeaderAuth';

const EmployersPage = () => {
  const router = useRouter();
  useHtmlClassname('with-main-background');

  return (
    <PageTemplate>
      <Header
        leftChildren={
          <HStack spacing="75px">
            <Logo />
            <Link href="/">Главная</Link>
            <Link href="/resumes">Соискатели</Link>
            <Link href="/employers">Работодателям</Link>
          </HStack>
        }
        rightChildren={<HeaderAuth isHr={true} isAuthorized={false} />}
        bgColor="transparent"
      />

      <VStack alignItems="flex-start" width="100%" padding="0 50px">
        <Heading color="green.900" as="h1" fontSize="200px" lineHeight="1">
          WantIT
        </Heading>

        <Text maxWidth="700px" mb="55px !important" fontSize="30px">
          Добро пожаловать в WanIT.Работодателям! <br />
          Мы поможем вам найти молодых, амбициозных и трудолюбивых
          IT-специалистов
        </Text>
        <Text maxWidth="700px" mb="75px !important" fontSize="30px">
          Давайте начнем!
        </Text>

        <Button
          color="white"
          padding="6px 24px"
          bg="green.500"
          _hover={{ bg: 'green.500' }}
          _active={{ bg: 'green.500' }}
          onClick={() => router.push('/employer/register')}
        >
          Зарегистрироваться
        </Button>
      </VStack>
    </PageTemplate>
  );
};

export default EmployersPage;
