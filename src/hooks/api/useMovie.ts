import { fetchMovieDetails } from '@/api/services/movie.service';

import { useQuery } from '@tanstack/react-query';

export const useMovieDetails = (id: number) =>
  useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  });
