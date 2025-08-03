import S from './styles.module.css';

import { NavbarLink } from '@/@types/navbar';
import logoMorpha from '@/assets/images/logo_moprha.svg';
import clsx from 'clsx';
import { FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { InputSearch } from '../InputSearch';

const Links: NavbarLink[] = [
  { path: '/homePage', label: 'Home', icon: FaHome },
  { path: '/homePages', label: 'Home', icon: FaHome },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={S.navbar}>
      <div className={S.wrapper}>
        <div>
          <img src={logoMorpha} alt="Logo Morpha" className={S.logo} />
        </div>

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
                {link.icon && <link.icon size={20} />}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div>
          <InputSearch />
        </div>
      </div>
    </nav>
  );
};
