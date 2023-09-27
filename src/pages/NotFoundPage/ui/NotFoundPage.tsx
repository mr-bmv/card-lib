import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import logo from '@/shared/assets/image/404.png';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className = '' }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      <div className={classNames(cls.container)}>
        <h1>
          <div> 404</div>
          <div> {t('Страница не найдена')}</div>
        </h1>
        <div className="img">
          <img src={logo} alt="Logo" width="340px" />
        </div>
      </div>
    </div>
  );
};
