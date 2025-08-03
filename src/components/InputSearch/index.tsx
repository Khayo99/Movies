import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import S from './styles.module.css';

type InputSearchProps = {
  placeholder?: string;
  delayDebounce?: number;
};

export const InputSearch = ({
  placeholder = 'Buscar',
  delayDebounce = 800,
}: InputSearchProps) => {
  const [params, setParams] = useSearchParams();
  const initialValue = params.get('search') || '';

  const [search, setSearch] = useState(initialValue);

  useEffect(() => {
    const dataSearch = params.get('search') || '';

    if (dataSearch !== search) {
      setSearch(dataSearch);
    }
  }, [params]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const next = new URLSearchParams(params);

      if (search) {
        next.set('search', search);
      }

      if (!search) {
        next.delete('search');
      }

      setParams(next);
    }, delayDebounce);

    return () => clearTimeout(handler);
  }, [search, delayDebounce]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const next = new URLSearchParams(params);

      if (search) {
        next.set('search', search);
      }

      if (!search) {
        next.delete('search');
      }

      setParams(next);
    }
  };

  return (
    <input
      type="text"
      className={S.inputSearch}
      placeholder={placeholder}
      value={search}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
