import { AboutPage } from '@/pages/AboutPage';
import { BmvPage } from '@/pages/BmvPage';
import { LibraryPage } from '@/pages/LibraryPage';
// import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
// import { ProfilePage } from '@/pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  BMV = 'bmv',
  LIBRARY = 'library',
  PROFILE = 'profile',
  // ARTICLES = 'articles',
  // ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.BMV]: '/bmv',
  [AppRoutes.LIBRARY]: '/library',
  [AppRoutes.PROFILE]: '/profile',
  // [AppRoutes.ARTICLES]: '/articles',
  // [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.LIBRARY]: {
    path: RoutePath.library,
    element: <LibraryPage />,
    authOnly: true,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.BMV]: {
    path: RoutePath.bmv,
    element: <BmvPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
