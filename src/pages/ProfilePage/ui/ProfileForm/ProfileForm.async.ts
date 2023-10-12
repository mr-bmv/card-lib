import { FC, lazy } from 'react';
import { ProfileFormProps } from './ProfileForm';

export const ProfileFormAsync = lazy<FC<ProfileFormProps>>(
  () =>
    new Promise((res) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Testing invalid input
      setTimeout(() => res(import('./ProfileForm')), 500); // TODO
    })
);
