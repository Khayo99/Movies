import { errorHandling } from '@/utils/errorHandling';
import { axiosInstance } from '../axios';

export const fetchSample = async (): Promise<ResponseData<Sample[]>> => {
  return await axiosInstance
    .get('/sample_endpoint')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao buscar sample');
      throw error;
    });
};

export const createSample = async (
  uuid: string
): Promise<ResponseDefaultApi> => {
  return await axiosInstance
    .post('/sample_endpoint', { uuid })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      errorHandling(error, 'Falha ao criar sample');
      throw error;
    });
};
