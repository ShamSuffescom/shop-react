import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SidebarUser';
// import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderUser';
import Footer from '../components/FooterUser';
import Logout from '../pages/frontend/Logout';
// import './UserLayout.css';

const UserLayout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar role="user" />
      <div id="page-content-wrapper">
        <Header />
        <div className="container-fluid">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
