// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { logout } from 'api/user';
import { useAsync } from 'hooks/useAsync.hook';

const LogoutPage = (): null => {
  const router = useRouter();

  useAsync(logout);

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
};

export default LogoutPage;
