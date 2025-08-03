import toast from './toast';

export function errorHandling(error: any, messageDefault: string) {
  console.error(error);

  const messageError = error?.response?.data?.message || messageDefault;

  toast('error', messageError);
}
