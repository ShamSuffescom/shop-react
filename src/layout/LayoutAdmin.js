import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SidebarAdmin';
// import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderAdmin';
import Footer from '../components/FooterAdmin';
import Logout from '../pages/frontend/Logout';
// import './LayoutAdmin.css';

const LayoutAdmin = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar role="admin" />
      <div id="page-content-wrapper">
        <Header />
        <div className="container-fluid">
          <Outlet />
        </div>
        <Footer />
        <Logout />
      </div>
    </div>
  );
};

export default LayoutAdmin;
