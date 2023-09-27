import { useTranslation } from 'react-i18next';

const LibraryPage = () => {
  const { t } = useTranslation('library');

  return <div>{t('library')}</div>;
};

export default LibraryPage;
