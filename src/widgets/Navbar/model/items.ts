import { RoutePath } from '@/shared/config/routConfig/routConfig';

export interface NavbarItemType {
  path: string;
  text: string;
  authOnly?: boolean;
}

export const NavbarItemsList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
  },
  {
    path: RoutePath.library,
    text: 'Библиотека',
    authOnly: true,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
  },
  {
    path: RoutePath.bmv,
    text: 'Обо мне',
  },
];
