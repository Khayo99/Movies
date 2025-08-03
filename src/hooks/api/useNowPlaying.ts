import { fetchNowPlaying } from '@/api/services/now_playing.service';

import { useQuery } from '@tanstack/react-query';

export const useNowPlaying = () =>
  useQuery({
    queryKey: ['now_playing'],
    queryFn: fetchNowPlaying,
  });
