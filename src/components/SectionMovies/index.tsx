import { useRef, useState, useEffect } from 'react';
import S from './styles.module.css';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import clsx from 'clsx';

interface SectionMoviesProps {
  title: string;
  children: React.ReactNode;
}

export const SectionMovies = ({ title, children }: SectionMoviesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setIsAtStart(scrollLeft <= 10);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      checkScrollPosition();
      scrollElement.addEventListener('scroll', checkScrollPosition);

      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [children]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={S.section}>
      <h2 className={S.sectionTitle}>{title}</h2>

      <div
        className={clsx(S.sectionContent, {
          ['!ml-10']: isAtStart,
          ['!mr-10']: isAtEnd,
        })}
        ref={scrollRef}
      >
        {children}
      </div>

      {!isAtStart && (
        <button
          className={`${S.scrollButton} ${S.scrollButtonLeft}`}
          onClick={scrollLeft}
          aria-label="Rolar para a esquerda"
        >
          <IoChevronBack size={20} />
        </button>
      )}

      {!isAtEnd && (
        <button
          className={`${S.scrollButton} ${S.scrollButtonRight}`}
          onClick={scrollRight}
          aria-label="Rolar para a direita"
        >
          <IoChevronForward size={20} />
        </button>
      )}
    </section>
  );
};
