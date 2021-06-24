import React from 'react';

import { chakra } from '@chakra-ui/react';

import { mockVacancies } from 'types/Vacancy.types';
import { PageTemplate } from 'components/templates/PageTemplate';
import { VacancyCard } from '../components/organisms/VacancyCard';

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { alignItems: 'flex-start', padding: '0 50px' },
});

const VacanciesPage = (): JSX.Element => {
  return (
    <StyledPageTemplate>
      {mockVacancies.map((vacancy) => (
        <VacancyCard vacancy={vacancy} key={vacancy.id} />
      ))}
    </StyledPageTemplate>
  );
};

export default VacanciesPage;
