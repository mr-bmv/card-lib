import { ThemeProvider } from './app/providers/ThemProvider';
import App from './app/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './app/providers/StoreProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import '@/shared/config/i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
