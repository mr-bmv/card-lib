import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import cards from '@/shared/assets/image/cards.png';
import { useMemo } from 'react';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { NavbarItemsList } from '../../model/items';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const itemsList = useMemo(
    () =>
      NavbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    []
  );

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.logo)}>
        <div className={classNames(cls.logo)}>
          <img src={cards} alt="Logo" width="130px" />
        </div>
      </div>
      <div className={classNames(cls.mainLinks)}>{itemsList}</div>
      <div className={classNames(cls.login)}>
        <div>@</div>
        <div>{t('En')}</div>
        <div>{t('LogIn')}</div>
      </div>
    </div>
  );
};
