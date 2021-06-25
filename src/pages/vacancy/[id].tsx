import React from 'react';

import { Box, chakra, Heading, Text, VStack } from '@chakra-ui/react';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';
import { mockVacancies, Vacancy } from 'types/Vacancy.types';

import { PageTemplate } from 'components/templates/PageTemplate';

type VacancyPageProps = {
  vacancy: Vacancy;
};

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { alignItems: 'flex-start', padding: '0 50px' },
});

const Row = ({ name, text }: { name: string; text: string }) => {
  return (
    <Text>
      <Text color="gray.500" display="inline">
        {name}:
      </Text>{' '}
      {text}
    </Text>
  );
};

const VacancyPage = ({ vacancy }: VacancyPageProps): JSX.Element => {
  useHtmlClassname('with-feed-background');

  return (
    <StyledPageTemplate>
      <Box position="relative" width="100%" height="65vh" mb="30px">
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
            от {vacancy.salary} {vacancy.currency} до вычета налогов
          </Heading>

          <Heading as="h4" size="md" mb="10px !important">
            {vacancy.author} - {vacancy.city}
          </Heading>

          <Row name="Тип занятости" text={vacancy.type_of_vacancy} />

          <Text color="black" mt="30px !important">
            {vacancy.description}
          </Text>
        </VStack>
      </Box>
    </StyledPageTemplate>
  );
};

export const getServerSideProps = async () => {
  return {
    props: { vacancy: mockVacancies[0] },
  };
};

export default VacancyPage;
