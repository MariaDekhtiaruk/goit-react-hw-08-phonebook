import { NavLink } from 'react-router-dom';
import css from './AuthNav.css';

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className="link" to="/register">
        Register
      </NavLink>
      <NavLink className="link" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
