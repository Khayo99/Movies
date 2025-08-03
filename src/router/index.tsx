import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from '@/theme/layout';
import HomePage from '@/pages/HomePage';
import MovieDetails from '@/pages/MovieDetails';

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
          element: <HomePage />,
        },
        {
          path: 'movieDetails/:id',
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { Router };
