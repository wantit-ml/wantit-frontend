import React from 'react';

import { Heading, Text, VStack, Button } from '@chakra-ui/react';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';

import { PageTemplate } from 'components/templates/PageTemplate';

const EmployersPage = () => {
  useHtmlClassname('with-main-background');

  return (
    <PageTemplate>
      <VStack alignItems="flex-start" width="100%" padding="0 50px">
        <Heading color="green.900" as="h1" fontSize="200px" lineHeight="1">
          WantIT
        </Heading>
        <Heading
          color="green.900"
          as="h2"
          fontSize="72px"
          fontWeight="400"
          lineHeight="1"
          mt="-30px !important"
          mb="50px !important"
        >
          if you want it
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
        >
          Зарегистрироваться
        </Button>
      </VStack>
    </PageTemplate>
  );
};

export default EmployersPage;
