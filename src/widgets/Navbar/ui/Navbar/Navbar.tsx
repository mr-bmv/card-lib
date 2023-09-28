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

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const itemsList = useMemo(
    () =>
      NavbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    []
  );

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.logo)}>
        <div className={classNames(cls.logo)}>
          <img src={cards} alt="Logo" width="130px" />
        </div>
      </div>
      <div className={classNames(cls.mainLinks)}>{itemsList}</div>
      <div className={classNames(cls.login)}>
        <ThemeSwitcher />
        <LangSwitcher />
        <Button
          theme={ThemeButton.LINK}
          className={cls.links}
          onClick={onShowModal}
        >
          {t('Login')}
        </Button>
        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    </div>
  );
};
