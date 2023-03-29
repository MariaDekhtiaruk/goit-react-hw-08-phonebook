import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';
import { Login } from '../pages/login/Login';
import { Registration } from '../pages/registration/Registration';

export function App() {
  return (
    <div className="app">
      <header className="header">
        <NavLink className="link" to={'/login'}>
          Login
        </NavLink>
        <NavLink className="link" to={'/register'}>
          Registration
        </NavLink>
        <NavLink className="link" to={'/contacts'}>
          Contacts
        </NavLink>
      </header>
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}
