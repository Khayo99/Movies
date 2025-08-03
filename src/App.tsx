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
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutos
      gcTime: 1000 * 60 * 10, // 10 minutos (anteriormente cacheTime)
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
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
