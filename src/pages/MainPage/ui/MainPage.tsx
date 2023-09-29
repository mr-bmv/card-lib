import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';
import banner from '@/shared/assets/image/mainBanner.webp';
import randomCard from '@/shared/assets/image/randomCard.png';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByUsername';

const MainPage = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation('translation');
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);

  return (
    <div>
      <div className={cls.imgCover}>
        <img src={banner} alt="Logo" />
        <div className={cls.loginBtn}>
          {!authData && (
            <Button theme={ThemeButton.INFO} onClick={onShowModal}>
              {t('Зарегистрироваться')}
            </Button>
          )}
        </div>
      </div>
      <div className={cls.randomCover}>
        <div className={cls.randomCard}>
          <img src={randomCard} alt="Logo" />
        </div>
        <div className={cls.mainContent}></div>
        <div className={cls.btn}>
          <Button theme={ThemeButton.PRIMARY}>{t('Обновить карту')}</Button>
        </div>
      </div>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
};

export default MainPage;
