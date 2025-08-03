import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from '@/theme/layout';

// Lazy loading das páginas
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const TrendingPage = React.lazy(() => import('@/pages/TrendingPage'));
const SearchResultsPage = React.lazy(() => import('@/pages/SearchResultsPage'));
const MovieDetails = React.lazy(() => import('@/pages/MovieDetails'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/homePage" replace />,
        },
        {
          path: 'homePage',
          element: (
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: 'trending',
          element: (
            <Suspense fallback={<PageLoader />}>
              <TrendingPage />
            </Suspense>
          ),
        },
        {
          path: 'search',
          element: (
            <Suspense fallback={<PageLoader />}>
              <SearchResultsPage />
            </Suspense>
          ),
        },
        {
          path: 'movieDetails/:id',
          element: (
            <Suspense fallback={<PageLoader />}>
              <MovieDetails />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { Router };
