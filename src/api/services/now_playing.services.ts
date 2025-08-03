import { errorHandling } from '@/utils/errorHandling';
import { axiosInstance } from '../axios';

export const fetchNowPlaying = async (): Promise<ResponseData<Movie>> => {
  return await axiosInstance
    .get('/movie/now_playing')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao buscar filmes em lançamento');
      throw error;
    });
};
