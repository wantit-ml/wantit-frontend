import React from 'react';

import { Box, chakra, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import { GetServerSideProps } from 'next';
import { default as Link } from 'next/link';

import { getVacancyById } from 'api/vacancy';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';
import { useUser } from 'hooks/useUser.hook';

import { mapCurrencyToText } from 'types/Currency.types';
import { Employment, mapEmploymentToText } from 'types/Schedule.types';
import { Vacancy } from 'types/Vacancy.types';

import MDEditor from '@uiw/react-md-editor';

import { Logo } from 'components/atoms/Logo';
import { HeaderAuth } from 'components/molecules/HeaderAuth';
import { Header } from 'components/organisms/Header';
import { PageTemplate } from 'components/templates/PageTemplate';

type VacancyPageProps = {
  vacancy: Vacancy;
};

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { alignItems: 'flex-start', padding: '0 50px' },
});

const StyledMdEditor = chakra(MDEditor.Markdown, {
  baseStyle: { width: '100%', mt: '30px !important' },
});

const Row = ({ name, text }: { name: string; text: string }) => {
  return (
    <Text>
      <Text color="gray.500" display="inline" as="span">
        {name}:
      </Text>{' '}
      {text}
    </Text>
  );
};

const VacancyPage = ({ vacancy }: VacancyPageProps): JSX.Element => {
  useHtmlClassname('with-feed-background');
  const { user } = useUser({ shouldRedirect: false });

  return (
    <StyledPageTemplate>
      <Header
        leftChildren={
          <HStack spacing="75px">
            <Logo />
            <Link href="/">Главная</Link>
            <Link href="/vacancies">Вакансии</Link>
            <Link href="/employers">Работодателям</Link>
          </HStack>
        }
        rightChildren={<HeaderAuth isHr={false} isAuthorized={Boolean(user)} />}
        bgColor="transparent"
      />

      <Box position="relative" width="100%" minHeight="65vh" mb="30px">
        <Box
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="100%"
          opacity="0.4"
          bg="white"
          zIndex={-1}
          borderRadius="40px"
          filter="drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.25))"
        />

        <VStack
          borderRadius="40px"
          padding="20px 40px"
          height="100%"
          width="100%"
          alignItems="flex-start"
        >
          <Heading as="h2" size="2xl">
            {vacancy.title}
          </Heading>

          <Heading as="h3" size="lg" fontWeight="normal" mb="45px !important">
            от {vacancy.salary} {mapCurrencyToText[vacancy.currency]} до вычета
            налогов
          </Heading>

          <Heading as="h4" size="md" mb="10px !important">
            {vacancy.city}
          </Heading>

          <Row
            name="Тип занятости"
            text={mapEmploymentToText[vacancy.type_of_vacancy as Employment]}
          />
          <Row name="Телефон" text={vacancy.phone} />
          <Row name="E-mail" text={vacancy.email} />

          <StyledMdEditor source={vacancy.description} />
        </VStack>
      </Box>
    </StyledPageTemplate>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps: GetServerSideProps<
  { vacancy: Vacancy },
  { id: string }
> = async ({ params: { id } }) => {
  const vacancy = await getVacancyById(id);

  return {
    props: { vacancy },
  };
};

export default VacancyPage;
