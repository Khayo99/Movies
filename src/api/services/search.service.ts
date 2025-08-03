import { errorHandling } from '@/utils/errorHandling';
import { axiosInstance } from '../axios';

export const fetchMoviesBySearch = async (
  query: string
): Promise<ResponseData<Movie>> => {
  return await axiosInstance
    .get('/search/movie', { params: { query } })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao buscar filmes');
      throw error;
    });
};
