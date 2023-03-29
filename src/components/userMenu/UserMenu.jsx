import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/usersThunks';
import { useUser } from 'redux/useSelectors';
import css from './UserMenu.css';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const { name } = useUser();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
      <NavLink className="link" to={'/contacts'}>
        Contacts
      </NavLink>
    </div>
  );
};

export default UserMenu;
