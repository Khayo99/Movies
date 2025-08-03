import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);

    return format(date, "dd 'de' MMM 'de' yyyy", { locale: ptBR });
  } catch (error) {
    console.error('Erro ao formatar data:', error);

    return dateString;
  }
};
