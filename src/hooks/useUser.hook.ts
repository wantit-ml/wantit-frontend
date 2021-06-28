import { useEffect } from 'react';
import { getMe } from 'api/user';

import { useRouter } from 'next/router';

import { useAsync } from './useAsync.hook';

type UseUserProps =
  | {
      shouldRedirect?: true;
      redirectTo: string;
    }
  | {
      shouldRedirect: false;
      redirectTo?: undefined;
    };

export const useUser = (props: UseUserProps) => {
  const { value: user, error, loading } = useAsync(getMe);
  const router = useRouter();

  useEffect(() => {
    if (!user && error && props.shouldRedirect) {
      router.push(props.redirectTo);
    }
  }, [user, error, router, props.shouldRedirect, props.redirectTo]);

  return { user, error, loading };
};
