import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import cards from '@/shared/assets/image/cards.png';
import { useCallback, useMemo, useState } from 'react';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { NavbarItemsList } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const itemsList = useMemo(
    () =>
      NavbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    []
  );

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);

  const loginBtn = authData ? (
    <Button theme={ThemeButton.LINK} className={cls.links} onClick={onLogout}>
      {t('Выйти')}
    </Button>
  ) : (
    <Button
      theme={ThemeButton.LINK}
      className={cls.links}
      onClick={onShowModal}
    >
      {t('Login')}
    </Button>
  );

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.logo)}>
        <div className={classNames(cls.logo)}>
          <img src={cards} alt="Logo" width="70px" />
        </div>
      </div>
      <div className={classNames(cls.mainLinks)}>{itemsList}</div>
      <div className={classNames(cls.login)}>
        <ThemeSwitcher />
        <LangSwitcher />
        {loginBtn}
        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    </div>
  );
};
