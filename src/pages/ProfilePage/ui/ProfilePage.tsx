import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  profileReducer,
} from '@/entities/Profile';
import { getProfileForm } from '@/entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageFooter } from './ProfilePageFooter';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className = '' }: ProfilePageProps) => {
  // работаем с async action
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const { t } = useTranslation('profile');

  useEffect(() => {
    console.log(1);
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        data-testid="ProfilePage"
        className={classNames('', {}, [className])}
      >
        <Text title={t('Профиль')} />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
        <ProfilePageFooter />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
