import { BugButton } from '@/app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('about')} <BugButton />
    </div>
  );
};

export default AboutPage;
