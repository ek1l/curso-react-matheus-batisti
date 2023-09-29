import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? style.active : 'naoAtivo')}
      >
        Home
      </NavLink>
      <NavLink
        to="/sobre"
        className={({ isActive }) => (isActive ? style.active : 'naoAtivo')}
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default Navbar;
