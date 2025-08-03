import S from './styles.module.css';

import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className={S.container}>
      <ScrollToTop />
      <div className={S.topbar}>
        <Navbar />
      </div>

      <div className={S.wrapper}>
        <main className={S.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { Layout };
