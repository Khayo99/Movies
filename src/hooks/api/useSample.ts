import { createSample, fetchSample } from '@/api/services/sample.services';
import toast from '@/utils/toast';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useSample = () =>
  useQuery({
    queryKey: ['sample'],
    queryFn: fetchSample,
  });

export const useSampleMutations = () => {
  // const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (uuid: string) => createSample(uuid),
    onSuccess: (res) => {
      toast('success', res.message);

      // Ao descomentar a linha abaixo, o react-query vai fazer o refetch automático quando o mutation for bem sucedido
      // queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  return {
    createMutation,
  };
};
