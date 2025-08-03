import { fetchMoviesBySearch } from '@/api/services/search.service';

import { useQuery } from '@tanstack/react-query';

export const useSearch = (query: string) =>
  useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => fetchMoviesBySearch(query),
    enabled: !!query,
  });
