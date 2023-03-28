import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';
import { Login } from '../pages/login/Login';
import { Registration } from '../pages/registration/Registration';

export function App() {
  return (
    <div className="app">
      <Link to={'/contacts'}>Contacts</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Registration</Link>
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}
