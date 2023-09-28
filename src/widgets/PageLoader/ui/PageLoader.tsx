import { memo } from 'react';
import cls from './PageLoader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className = '' }: PageLoaderProps) => {
  return (
    <div
      data-testid="pageLoader"
      className={classNames(cls.Loader, {}, [className])}
    >
      <Loader />
    </div>
  );
});
