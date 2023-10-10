import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const ProfilePage = ({ className = '' }: NotFoundPageProps) => {
  return (
    <div
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      <div className={classNames(cls.container)}>
        <h1>
          <div> 777</div>
          <div> 777</div>
        </h1>
      </div>
    </div>
  );
};
