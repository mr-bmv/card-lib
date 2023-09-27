import { useTranslation } from 'react-i18next';

const LibraryPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('Библиотека')}</div>;
};

export default LibraryPage;
