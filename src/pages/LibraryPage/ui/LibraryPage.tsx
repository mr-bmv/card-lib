import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const LibraryPage = () => {
  const { t } = useTranslation('library');

  return (
    <>
      <div>{t('library')}</div>
      <div>
        <Button theme={ThemeButton.PRIMARY} size={ButtonSize.L}>
          PRIMARY
        </Button>
        <Button theme={ThemeButton.SECONDARY} size={ButtonSize.L}>
          {' '}
          SECONDARY
        </Button>
        <Button theme={ThemeButton.SUCCESS} size={ButtonSize.M}>
          SUCCESS
        </Button>
        <Button theme={ThemeButton.INFO} size={ButtonSize.M}>
          {' '}
          INFO
        </Button>
        <Button theme={ThemeButton.WARNING} size={ButtonSize.XL}>
          {' '}
          WARNING
        </Button>
        <Button theme={ThemeButton.DANGER} size={ButtonSize.XL}>
          {' '}
          DANGER
        </Button>
        <Button theme={ThemeButton.LIGHT} disabled>
          {' '}
          LIGHT
        </Button>
        <Button theme={ThemeButton.DARK} disabled>
          {' '}
          DARK
        </Button>
        <Button theme={ThemeButton.LINK}>LINK</Button>
      </div>

      <div>
        <Button theme={ThemeButton.PRIMARY} outline>
          PRIMARY
        </Button>
        <Button theme={ThemeButton.SECONDARY} outline>
          SECONDARY
        </Button>
        <Button theme={ThemeButton.SUCCESS} outline>
          SUCCESS
        </Button>
        <Button theme={ThemeButton.INFO} outline>
          INFO
        </Button>
        <Button theme={ThemeButton.WARNING} outline>
          WARNING
        </Button>
        <Button theme={ThemeButton.DANGER} outline>
          DANGER
        </Button>
        <Button theme={ThemeButton.LIGHT} outline>
          LIGHT
        </Button>
        <Button theme={ThemeButton.DARK} outline>
          DARK
        </Button>
      </div>
    </>
  );
};

export default LibraryPage;
