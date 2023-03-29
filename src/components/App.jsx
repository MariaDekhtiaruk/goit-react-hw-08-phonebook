import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';
import { Login } from '../pages/login/Login';
import { Registration } from '../pages/registration/Registration';
import UserMenu from './userMenu/UserMenu';
import { useEffect, useState } from 'react';
import { useUser } from 'redux/useSelectors';
import api from 'services/api';
import { AuthNav } from './AuthNav/AuthNav';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

export function App() {
  const { token, isLoggedIn } = useUser();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    api.setAuthToken(token);
    setIsReady(true);
  }, [token]);

  return isReady ? (
    <div className="app">
      <header className="header">
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Routes>
        <Route
          index
          path="/"
          element={
            <PrivateRoute component={<Login />} redirectTo="/contacts" />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PrivateRoute component={<Login />} redirectTo="/contacts" />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PrivateRoute component={<Registration />} redirectTo="/contacts" />
          }
        ></Route>
        <Route
          path="/contacts"
          element={<RestrictedRoute component={<Contacts />} />}
        ></Route>
      </Routes>
    </div>
  ) : null;
}
