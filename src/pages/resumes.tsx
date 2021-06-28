import React, { useEffect, useState } from 'react';

import { chakra, Grid, HStack } from '@chakra-ui/react';

import { default as Link } from 'next/link';

import { AboutData } from 'api/user';
import { getMatchingUsers } from 'api/matching';

import { useHtmlClassname } from 'hooks/useHtmlClassname.hook';
import { useUser } from 'hooks/useUser.hook';

import { Logo } from 'components/atoms/Logo';
import { HeaderAuth } from 'components/molecules/HeaderAuth';
import { EmployeeCard } from 'components/organisms/EmployeeCard';
import { Header } from 'components/organisms/Header';
import { PageTemplate } from 'components/templates/PageTemplate';

const StyledPageTemplate = chakra(PageTemplate, {
  baseStyle: { padding: '0 50px', alignItems: 'flex-start' },
});

const VacanciesPage = (): JSX.Element => {
  const { user, loading } = useUser({ shouldRedirect: false });
  const [resumes, setResumes] = useState<AboutData[]>([]);

  useHtmlClassname('with-feed-background');

  useEffect(() => {
    (async () => {
      if (loading || !user) {
        return;
      }

      try {
        const data = await getMatchingUsers();
        setResumes(data);
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
            <Link href="/resumes">Резюме</Link>
            <Link href="/employers">Работодателям</Link>
            <Link href="/employer/vacancy">Новая вакансия</Link>
          </HStack>
        }
        rightChildren={<HeaderAuth isHr={true} isAuthorized={true} />}
        bgColor="transparent"
      />

      <Grid
        gap="50px"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoFlow="row"
        width="100%"
      >
        {resumes.map((employee) => (
          <EmployeeCard employee={employee} key={employee.id} />
        ))}
      </Grid>
    </StyledPageTemplate>
  );
};

export default VacanciesPage;
