import { fetchTrendingMovies } from '@/api/services/trending.service';

import { useQuery } from '@tanstack/react-query';

export const useTrendingMovies = () =>
  useQuery({
    queryKey: ['trendingMovies'],
    queryFn: fetchTrendingMovies,
  });
