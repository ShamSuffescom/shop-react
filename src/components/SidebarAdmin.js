import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Admin Dashboard</div>
      <div className="list-group list-group-flush">
        <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
        <Link to="/admin/users" className="list-group-item list-group-item-action bg-light">Users</Link>
        <Link to="/admin/reports" className="list-group-item list-group-item-action bg-light">Reports</Link>
      </div>
    </div>
  );
};

export default Sidebar;
