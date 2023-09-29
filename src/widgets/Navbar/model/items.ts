import { RoutePath } from '@/shared/config/routConfig/routConfig';

export interface NavbarItemType {
  path: string;
  text: string;
  authOnly?: boolean;
}

export const NavbarItemsList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: 'main',
  },
  {
    path: RoutePath.library,
    text: 'library',
    authOnly: true,
  },
  {
    path: RoutePath.about,
    text: 'aboutSite',
  },
  {
    path: RoutePath.bmv,
    text: 'aboutMe',
  },
];
