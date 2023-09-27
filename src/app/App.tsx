import { classNames } from '@/shared/lib/classNames/classNames';
import './styles/index.scss';
import { useTheme } from './providers/ThemProvider';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/routes';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserMounted, userActions } from '@/entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">{mounted && <AppRouter />}</div>
    </div>
  );
};
export default App;
