import { useEffect } from 'react';

export const useHtmlClassname = (classname: string) => {
  useEffect(() => {
    const html = document.querySelector('html');
    html?.classList.add(classname);
    return () => html?.classList.remove(classname);
  }, [classname]);
};
