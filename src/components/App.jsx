import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Contacts from 'pages/contacts/Contacts';
// import { Login } from '../pages/login/Login';
// import { Registration } from '../pages/registration/Registration';
import UserMenu from './userMenu/UserMenu';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useUser } from 'redux/useSelectors';
import api from 'services/api';
import { AuthNav } from './AuthNav/AuthNav';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Registration = lazy(() => import('../pages/registration/Registration'));
const Login = lazy(() => import('../pages/login/Login'));
const Contacts = lazy(() => import('../pages/contacts/Contacts'));

export function App() {
  const { token, isLoggedIn } = useUser();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    api.setAuthToken(token);
    setIsReady(true);
  }, [token]);

  return isReady ? (
    <Container maxWidth="m">
      <div className="app">
        <Box sx={{ my: 4 }}>
          <header className="header">
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </header>
        </Box>
        <Suspense fallback={<div>Loading page...</div>}>
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
                <PrivateRoute
                  component={<Registration />}
                  redirectTo="/contacts"
                />
              }
            ></Route>
            <Route
              path="/contacts"
              element={<RestrictedRoute component={<Contacts />} />}
            ></Route>
          </Routes>
        </Suspense>
      </div>
    </Container>
  ) : null;
}
