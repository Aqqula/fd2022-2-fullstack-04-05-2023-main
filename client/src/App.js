import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import UserProfile from './components/UserProfile';
// import HomePage from './pages/HomePage';
// import UserPage from './pages/UserPage';
// import LogUpPage from './pages/LogUpPage';
// import GroupsPage from './pages/GroupsPage';
const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const LogUpPage = lazy(() => import('./pages/LogUpPage'));
const GroupsPage = lazy(() => import('./pages/GroupsPage'));
const UserProfile = lazy(() => import('./components/UserProfile'));

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
            <NavLink to="/group-create">GROUP CREATE</NavLink>
          </li>
          <li>
            <NavLink to="/log-up">LOG UP</NavLink>
          </li>
        </ol>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/group-create" element={<GroupsPage />} />
          <Route path="/log-up" element={<LogUpPage />} />
          <Route path="/users/:idUser" element={<UserProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
