import { useTranslation } from 'react-i18next';

const BmvPage = () => {
  const { t } = useTranslation('bmv');

  return <div>{t('bmvAbout')}</div>;
};

export default BmvPage;
