import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './styles.module.css';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import Button from '../Button';

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDropdown = ({ isOpen, onClose }: SearchDropdownProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?search=${encodeURIComponent(search.trim())}`);
      onClose();
      setSearch('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={S.overlay} onClick={onClose}>
      <div className={S.dropdown} onClick={(e) => e.stopPropagation()}>
        <div className={S.header}>
          <h2 className={S.title}>Buscar filmes</h2>
          <button onClick={onClose} className={S.closeButton}>
            <IoCloseOutline size={24} />
          </button>
        </div>

        <form onSubmit={handleSearch} className={S.form}>
          <div className={S.inputWrapper}>
            <IoSearchOutline className={S.searchIcon} size={20} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite o nome do filme..."
              className={S.input}
              autoFocus
            />
          </div>

          <Button type="submit" className="w-full">
            Buscar
          </Button>
        </form>
      </div>
    </div>
  );
};
