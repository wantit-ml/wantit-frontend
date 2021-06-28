import React, { useEffect, useState } from 'react';

import { default as Link } from 'next/link';

import { chakra, Grid, HStack } from '@chakra-ui/react';

import { getAllVacancies, VacancyDataWithId } from 'api/vacancy';
import { getMatchingVacancies } from 'api/matching';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';
import { useUser } from 'hooks/useUser.hook';

import { Logo } from 'components/atoms/Logo';
import { HeaderAuth } from 'components/molecules/HeaderAuth';
import { VacancyCard } from 'components/organisms/VacancyCard';
import { Header } from 'components/organisms/Header';
import { PageTemplate } from 'components/templates/PageTemplate';

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { padding: '0 50px' },
});

const VacanciesPage = (): JSX.Element => {
  const { user, loading } = useUser({ shouldRedirect: false });
  const [vacancies, setVacancies] = useState<VacancyDataWithId[]>([]);

  useHtmlClassname('with-feed-background');

  useEffect(() => {
    (async () => {
      if (loading) {
        return;
      }

      try {
        const data = await (() => {
          if (user) {
            return getMatchingVacancies(user.id);
          } else {
            return getAllVacancies();
          }
        })();

        setVacancies(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [loading, user]);

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

      <Grid
        gap="50px"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoFlow="row"
        width="100%"
      >
        {vacancies.map((vacancy) => (
          <VacancyCard vacancy={vacancy} key={vacancy.id} />
        ))}
      </Grid>
    </StyledPageTemplate>
  );
};

export default VacanciesPage;
