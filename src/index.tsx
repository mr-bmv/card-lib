import { render } from 'react-dom';
import { ThemeProvider } from './app/providers/ThemProvider';
import App from './app/App';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
