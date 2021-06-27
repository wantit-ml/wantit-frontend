import React from 'react';

import { default as Link } from 'next/link';
import {Avatar, chakra} from "@chakra-ui/react";

const StyledLink = chakra(Link);

const AUTHORIZED_TEXT = 'Выйти';
const UNAUTHORIZED_TEXT = 'Войти';

const AUTHORIZED_LINK = '/logout';
const HR_UNAUTHORIZED_LINK = '/employer/login'
const USER_UNAUTHORIZED_LINK = '/employee/login';

export const HeaderAuth = ({ linkColor = 'white', isHr, isAuthorized }: { linkColor?: string, isHr: boolean, isAuthorized: boolean }): JSX.Element => {
  const link = (() => {
    if (isAuthorized) {
      return AUTHORIZED_LINK;
    }

    return isHr ? HR_UNAUTHORIZED_LINK : USER_UNAUTHORIZED_LINK;
  })();

  return (
    <>
      <StyledLink color={linkColor} href={link}>{isAuthorized ? AUTHORIZED_TEXT : UNAUTHORIZED_TEXT}</StyledLink>
      <Avatar size="md" ml="5px" />
    </>
  );
};
