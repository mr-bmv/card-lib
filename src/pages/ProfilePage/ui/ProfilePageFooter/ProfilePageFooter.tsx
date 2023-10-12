import { profileActions } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileModal } from '../ProfileModal/ProfileModal';
import cls from './ProfilePageFooter.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageFooter = (props: ProfilePageHeaderProps) => {
  const { className = '' } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    setIsAuthModal(true);
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Button className={cls.editBtn} theme={ThemeButton.INFO} onClick={onEdit}>
        {t('Редактировать')}
      </Button>
      {isAuthModal && (
        <ProfileModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
};
