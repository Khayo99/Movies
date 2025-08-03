import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import S from './styles.module.css';

type InputSearchProps = {
  placeholder?: string;
};

export const InputSearch = ({ placeholder = 'Buscar' }: InputSearchProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?search=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (!location.pathname.includes('/search')) {
      setSearch('');
    }
  }, [location.pathname]);

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
