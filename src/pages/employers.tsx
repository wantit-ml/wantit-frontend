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
          <HStack spacing={{ base: '15px', lg: '75px' }}>
            <Logo />
            <Link href="/">Главная</Link>
            <Link href="/resumes">Соискатели</Link>
            <Link href="/employers">Работодателям</Link>
          </HStack>
        }
        rightChildren={<HeaderAuth isHr={true} isAuthorized={false} />}
        bgColor="transparent"
      />

      <VStack
        textAlign={{ base: 'center', lg: 'left' }}
        alignItems={{ lg: 'flex-start', base: 'center' }}
        width="100%"
        padding="0 50px"
      >
        <Heading
          color="green.900"
          as="h1"
          fontSize={{ base: '75px', lg: '150px' }}
          lineHeight="1"
        >
          WantIT
        </Heading>

        <Text
          maxWidth="700px"
          mb="55px !important"
          fontSize={{ base: '20px', lg: '30px' }}
        >
          Добро пожаловать в WanIT.Работодателям! <br />
          Мы поможем вам найти молодых, амбициозных и трудолюбивых
          IT-специалистов
        </Text>
        <Text
          maxWidth="700px"
          mb="75px !important"
          fontSize={{ base: '20px', lg: '30px' }}
        >
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
