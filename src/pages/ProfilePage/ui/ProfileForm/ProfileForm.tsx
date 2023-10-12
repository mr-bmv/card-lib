import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
  ProfileCard,
  ValidateErrorsTranslateType,
  getProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  updateProfileData,
} from '@/entities/Profile';
import { getProfileForm } from '@/entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

export interface ProfileFormProps {
  className?: string;
  onClose: () => void;
}

const ProfileForm = memo(({ className = '', onClose }: ProfileFormProps) => {
  console.log(className); // TODO
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const validateErrorsTranslate: ValidateErrorsTranslateType = {
    [ValidateProfileError.INCORRECT_AGE]: t('некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('некорректная страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('некорректные данные'),
    [ValidateProfileError.SERVER_ERROR]: t('ошибка сервера'),
  };

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  const onSave = useCallback(() => {
    if (JSON.stringify(formData) !== JSON.stringify(data)) {
      dispatch(updateProfileData());
    }

    onClose();
  }, [data, dispatch, formData, onClose]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
    onClose();
  }, [dispatch, onClose]);

  return (
    <>
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorsTranslate[err]}
            key={err}
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
      <Button
        // className={cls.editBtn}
        theme={ThemeButton.PRIMARY}
        onClick={onCancelEdit}
      >
        {t('Отменить')}
      </Button>
      <Button theme={ThemeButton.SUCCESS} onClick={onSave}>
        {t('Сохранить')}
      </Button>
    </>
  );
});

export default ProfileForm;
