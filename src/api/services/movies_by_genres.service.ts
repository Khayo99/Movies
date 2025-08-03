import { errorHandling } from '@/utils/errorHandling';
import { axiosInstance } from '../axios';

export const fetchMoviesByGenres = async (
  params: PayloadMoviesByGenres
): Promise<ResponseData<Movie>> => {
  return await axiosInstance
    .get('/discover/movie', { params })
    .then((res) => {
      const dataOrdered = res.data.results.sort((a: Movie, b: Movie) =>
        a.vote_average < b.vote_average ? 1 : -1
      );

      return {
        ...res.data,
        results: dataOrdered,
      };
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao buscar filmes em lançamento');
      throw error;
    });
};
