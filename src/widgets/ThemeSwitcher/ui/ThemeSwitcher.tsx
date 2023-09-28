// import {classNames} from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemProvider';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
// import LightIcon from '@/shared/assets/icons/theme-light.svg';
// import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.ThemeSwitcher)}>
      <Button
        theme={ThemeButton.LINK}
        className={classNames('', {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? '⬤' : '◯'}
      </Button>
    </div>
  );
};
