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
        <div className={cls.mainContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci
          pariatur vel vero debitis? Dicta numquam beatae tenetur quis omnis.
          Aut cupiditate quia repellendus minima. Enim sit quidem, deleniti
          blanditiis beatae, similique cupiditate eos officiis debitis
          voluptatum fugiat ad. Blanditiis, soluta nisi sint magni minima
          ratione. Error eveniet a neque, similique iusto natus non odit quasi
          consequatur minima iure maxime sapiente velit nisi cum exercitationem
          voluptatem quas, sunt nesciunt? Quos accusamus magni esse beatae, fuga
          recusandae reiciendis nam, sunt perferendis animi, culpa voluptatum
          aspernatur numquam quod necessitatibus? Tenetur nisi laudantium quae
          distinctio pariatur suscipit alias ad delectus obcaecati minus
          recusandae optio quas omnis asperiores nemo exercitationem fugit
          aspernatur modi, inventore sapiente? Iusto saepe eius nostrum mollitia
          hic similique dicta facilis fugiat odit recusandae laboriosam dolor
          autem aspernatur cum atque aperiam, ut error repellendus quo omnis et.
          Quisquam, recusandae veritatis, ullam ipsum aliquam explicabo facilis
          illum consequatur cupiditate impedit, magni sapiente?.
        </div>
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
