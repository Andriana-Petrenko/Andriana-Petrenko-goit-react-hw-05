import { NavLink, useLocation } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from "clsx"

const activeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  const location = useLocation();
  return (
      <nav className={css.nav}>
          <NavLink to='/' className={activeLinkClass}>Home</NavLink>
          <NavLink state={location} to='/movies' className={activeLinkClass}>Movies</NavLink>
    </nav>
  )
}

export default Navigation