/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/user', {
        // headers: { 'x-auth-token': token },
        headers: { 'Authorization': `Bearer ${token}` },
      });
      setUser(res.data.user);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>User Page</h2>
      {user && <p>Welcome, {user.user.id}</p>}
      {user && <p>username:  {user.user.username}</p>}
      {user && <p>email :  {user.user.email}</p>}
      {user && <p>role :  {user.user.role}</p>}
    </div>
  );
};

export default UserDashboard;*/

import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Dashboard</h1>
      <p>Welcome to the USER dashboard!</p>
    </div>
  );
};

export default Dashboard;