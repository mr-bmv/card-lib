import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import cards from '@/shared/assets/image/cards.png';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.logo)}>
        <div className={classNames(cls.logo)}>
          <img src={cards} alt="Logo" width="130px" />
        </div>
      </div>
      <div className={classNames(cls.mainLinks)}>
        <div>Главная</div>
        <div>О сайте</div>
        <div>Обо мне</div>
      </div>
      <div className={classNames(cls.login)}>
        <div>@</div>
        <div>En</div>
        <div>LogIn</div>
      </div>
    </div>
  );
};
