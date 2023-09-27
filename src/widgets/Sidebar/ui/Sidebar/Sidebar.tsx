import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {}, [className])}
    >
      text
    </div>
  );
});
