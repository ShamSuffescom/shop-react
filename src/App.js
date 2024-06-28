/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './components/frontend/LoginPage';
import UserPage from './components/user/UserDashboard';
import AdminPage from './components/admin/AdminDashboard';
import Logout from './components/user/Logout';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
         <Logout />
      </div>
    </Router>
  );
};

export default App;*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './store/store';

// import { AuthProvider, useAuth } from './AuthContext';
// import ProtectedRoute from './ProtectedRoute';

// Layouts
import LayoutAdmin from './layout/LayoutAdmin';
// import LayoutUser from './layout/LayoutUser';

// Admin
import DashboardAdmin from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Reports from './pages/admin/Reports';

// Admin
import DashboardUser from './pages/user/Dashboard';

// Frontend
import LoginPage from './pages/frontend/LoginPage';
import Logout from './pages/frontend/Logout';

import Home from './pages/frontend/Home';
import AboutUs from './pages/frontend/AboutUs';
import ContactUs from './pages/frontend/ContactUs';
import Shop from './pages/frontend/Shop';

import Routers from './routes/routers';


import './App.css';

const App = () => {
  
  const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
  };

  // const getRole = () => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user ? user.role : null;
  // };

  // const user = JSON.parse(localStorage.getItem('user'));
  // console.log("user.role: "+user.role);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // if (!user) {
  //   return <div>Please log in</div>;
  // }

  return (
    <Routers user = { user } />
    );
};

export default App;
