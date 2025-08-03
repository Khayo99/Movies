import { errorHandling } from '@/utils/errorHandling';
import { axiosInstance } from '../axios';

export const fetchTrendingMovies = async (): Promise<ResponseData<Movie>> => {
  return await axiosInstance
    .get('/trending/movie/week')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao buscar filmes em tendência');
      throw error;
    });
};
