import { classNames } from '@/shared/lib/classNames/classNames';
import './styles/index.scss';
import { useTheme } from './providers/ThemProvider';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/shared/ui/Loader/Loader';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ErrorPage } from '@/pages/ErrorPage';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        {/* <Sidebar />
        <div className="collection">
          <Text
            theme={TextTheme.PRIMARY}
            text="Nullam quis risus eget urna mollis ornare vel eu leo."
          />
          <Loader />
        </div> */}
        <ErrorPage />
      </div>
    </div>
  );
};
export default App;
