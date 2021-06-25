import React from 'react';

import { chakra, Grid } from '@chakra-ui/react';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';

import { mockVacancies } from 'types/Vacancy.types';

import { VacancyCard } from 'components/organisms/VacancyCard';
import { PageTemplate } from 'components/templates/PageTemplate';

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { padding: '0 50px' },
});

const VacanciesPage = (): JSX.Element => {
  useHtmlClassname('with-feed-background');

  return (
    <StyledPageTemplate>
      <Grid
        gap="50px"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        gridAutoFlow="row"
      >
        {mockVacancies.map((vacancy) => (
          <VacancyCard vacancy={vacancy} key={vacancy.id} />
        ))}
      </Grid>
    </StyledPageTemplate>
  );
};

export default VacanciesPage;
