import React from 'react';

import { chakra, Heading, Text } from '@chakra-ui/react';

import { mockVacancies, Vacancy } from 'types/Vacancy.types';

import { PageTemplate } from 'components/templates/PageTemplate';

type VacancyPageProps = {
  vacancy: Vacancy;
};

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { alignItems: 'flex-start', padding: '0 50px' },
});

const VacancyPage = ({ vacancy }: VacancyPageProps): JSX.Element => {
  return (
    <StyledPageTemplate label={vacancy.title}>
      <Heading as="h3" size="xl">
        от {vacancy.salary} {vacancy.currency} до вычета налогов
      </Heading>

      <Heading as="h4" size="lg">
        {vacancy.author} - {vacancy.city}
      </Heading>

      <Text>{vacancy.description}</Text>
    </StyledPageTemplate>
  );
};

export const getServerSideProps = async () => {
  return {
    props: { vacancy: mockVacancies[0] },
  };
};

export default VacancyPage;
