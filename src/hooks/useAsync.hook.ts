import {useState, useEffect, useCallback} from 'react';

export const useAsync = <T, E = Error>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
    >("idle");
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((response: T) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error: E) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute().then();
    }
  }, [execute, immediate]);

  return { execute, status, value, error, loading: status === 'pending' };
};
