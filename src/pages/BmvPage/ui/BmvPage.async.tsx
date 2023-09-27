import { lazy } from 'react';

export const BmvPageAsync = lazy(
  () =>
    new Promise((res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Testing invalid input
      setTimeout(() => res(import('./BmvPage')), 1500);
    })
);

// заменить перед деплоем
// export const AboutPageAsync = lazy(() => import("./AboutPage"));
