import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
};

export default Navbar;
