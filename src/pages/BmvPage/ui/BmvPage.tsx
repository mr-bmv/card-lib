import { useTranslation } from 'react-i18next';

const BmvPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('Обо мне')}</div>;
};

export default BmvPage;
