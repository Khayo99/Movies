import { errorHandling } from '@/utils/errorHandling';
import { axiosInstance } from '../axios';

export const fetchMovieDetails = async (
  id: number
): Promise<ResponseData<Movie>> => {
  return await axiosInstance
    .get(`/movie/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao buscar detalhes do filme');
      throw error;
    });
};
