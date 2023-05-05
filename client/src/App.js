import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LogUpPage from './pages/LogUpPage';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ol>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/users">USERS</NavLink>
          </li>
          <li>
            <NavLink to="/LOGUP">LOG UP</NavLink>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/LOGUP" element={<LogUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
