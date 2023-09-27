import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import logo from '@/shared/assets/image/404.png';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className = '' }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div
      data-testid="ErrorPage"
      className={classNames(cls.ErrorPage, {}, [className])}
    >
      <div className={classNames(cls.text)}>
        {t('Произошла непредвиденная ошибка')}
      </div>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>

      <img src={logo} alt="Logo" width="340px" />
    </div>
  );
};