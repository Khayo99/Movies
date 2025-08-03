import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import './theme/fonts.css';
import './theme/global.css';

import { Router } from './router';
import { StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 300000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerStyle={{ wordBreak: 'break-word' }}
        />
        <Router />
      </StyledEngineProvider>
    </QueryClientProvider>
  </>
);
