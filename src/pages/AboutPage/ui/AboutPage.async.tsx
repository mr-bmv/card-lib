import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Testing invalid input
      setTimeout(() => res(import('./AboutPage')), 1500);
    })
);

// заменить перед деплоем
// export const AboutPageAsync = lazy(() => import("./AboutPage"));
