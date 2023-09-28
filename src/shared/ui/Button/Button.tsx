import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
  LIGHT = 'light',
  DARK = 'dark',
  LINK = 'link',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ICommonButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: ButtonSize;
}

type isDisabledButton = ICommonButton & { disabled?: boolean; outline?: never };
type IOutlineButton = ICommonButton & { outline?: boolean; disabled?: never };

type ButtonProps = isDisabledButton | IOutlineButton;

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ThemeButton.PRIMARY,
    outline = false,
    disabled = false,
    size = ButtonSize.L,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.outline]: outline,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
