/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/admin', {
          // headers: { 'x-auth-token': token },
          headers: { 'Authorization': `Bearer ${token}` },
        });
        setMessage(res.data);
      } catch (err) {
        setMessage('Access denied');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default AdminDashboard;*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login or handle unauthorized access
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/api/admin', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        navigate('/admin');
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default AdminDashboard;*/


import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
};

export default Dashboard;
