import { getUserAuthData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import cards from '@/shared/assets/image/cards.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { DropdownMenu } from '@/widgets/DropdownMenu';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavbarItemsList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const itemsList = useMemo(
    () =>
      NavbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    []
  );

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const logoutItems = [
    {
      text: 'myProfile',
      to: 'profile',
    },
    {
      text: 'myCollection',
    },
    {
      text: 'Logout',
      onClick: onLogout,
    },
  ];
  const loginBtn = authData ? (
    <DropdownMenu items={logoutItems} btnText={authData?.username} />
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
