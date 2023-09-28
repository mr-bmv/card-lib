import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarItem.module.scss';
import { NavbarItemType } from '../../model/items';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={item.path}
      className={classNames(cls.item)}
    >
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
