import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/usersThunks';
import { useUser } from 'redux/useSelectors';
import './UserMenu.css';
import { NavLink } from 'react-router-dom';

import { Button } from '@mui/material';

const UserMenu = () => {
  const { name } = useUser();
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <p className="username">Welcome, {name}</p>

      <NavLink className="link" to={'/contacts'}>
        Contacts
      </NavLink>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
