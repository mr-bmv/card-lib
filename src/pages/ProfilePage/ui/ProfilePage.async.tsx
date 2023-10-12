import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Testing invalid input
      setTimeout(() => res(import('./ProfilePage')), 1000);
    })
);

// TODO заменить перед деплоем
// export const MainPageAsync = lazy(() => import("./MainPage"));
