import { fetchMoviesByGenres } from '@/api/services/movies_by_genres.service';

import { useQuery } from '@tanstack/react-query';

export const useGenres = (filters: PayloadMoviesByGenres) =>
  useQuery({
    queryKey: ['genres', filters],
    queryFn: () => fetchMoviesByGenres(filters),
  });
