import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import './theme/fonts.css';
import './theme/global.css';

import { Router } from './router';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <StyledEngineProvider injectFirst>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ wordBreak: 'break-word' }}
      />
      <Router />
    </StyledEngineProvider>
  </>
);
