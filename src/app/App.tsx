import { classNames } from '@/shared/lib/classNames/classNames';
import './styles/index.scss';
import { useTheme } from './providers/ThemProvider';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/routes';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <AppRouter />
      </div>
    </div>
  );
};
export default App;
