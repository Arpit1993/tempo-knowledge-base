import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TempoThemeProvider } from './theme/ThemeContext.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <TempoThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TempoThemeProvider>
)
