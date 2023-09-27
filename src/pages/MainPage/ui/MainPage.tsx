import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';

const MainPage = () => {
  const { t } = useTranslation('translation');

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
