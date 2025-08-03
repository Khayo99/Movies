import S from './styles.module.css';

import { NavbarLink } from '@/@types/navbar';
import logoMorpha from '@/assets/images/logo_moprha.svg';

import { FaHome, FaFire } from 'react-icons/fa';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { TbDeviceTvFilled } from 'react-icons/tb';

import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { InputSearch } from '../InputSearch';

const Links: NavbarLink[] = [
  { path: '/homePage', label: 'Home', icon: FaHome },
  { path: '/trending', label: 'Trending', icon: FaFire },
  { path: '#', label: 'Filmes', icon: BiSolidCameraMovie },
  { path: '#', label: 'Séries', icon: TbDeviceTvFilled },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={S.navbar}>
      <div className={S.wrapper}>
        <section className={S.content}>
          <Link to="/homePage">
            <img src={logoMorpha} alt="Logo Morpha" className={S.logo} />
          </Link>

          <div className={S.links}>
            {Links.map((link) => {
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={clsx(S.link, {
                    [S.active]: location.pathname === link.path,
                  })}
                >
                  {link.icon && <link.icon size={22} />}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </section>

        <div>
          <InputSearch />
        </div>
      </div>
    </nav>
  );
};
