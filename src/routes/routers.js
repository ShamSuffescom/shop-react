import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/store';

// import { AuthProvider, useAuth } from './AuthContext';
// import ProtectedRoute from './ProtectedRoute';

// Layouts
import LayoutAdmin from '../layout/LayoutAdmin';
import LayoutUser from '../layout/LayoutUser';

// Admin
import DashboardAdmin from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import Reports from '../pages/admin/Reports';

// Admin
import DashboardUser from '../pages/user/Dashboard';

// Frontend
import LoginPage from '../pages/frontend/LoginPage';
import Logout from '../pages/frontend/Logout';

import Home from '../pages/frontend/Home';
import AboutUs from '../pages/frontend/AboutUs';
import ContactUs from '../pages/frontend/ContactUs';
import Shop from '../pages/frontend/Shop';


const Routers = ({user}, {navigate}) => {
  
  const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
  };

  // const getRole = () => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user ? user.role : null;
  // };

  // const user = JSON.parse(localStorage.getItem('user'));
  // console.log("user.role: "+user.role);
	
	// if (!user) {
  //   return <div>Please log in</div>;
  // }

  // console.log(user.user.role);
	//==========

	const [checkUser, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/user', {
        // headers: { 'x-auth-token': token },
        headers: { 'Authorization': `Bearer ${token}` },
      });
      setUser(res.data.checkUser);
    };
    fetchData();
  }, []);


	// const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let cur_user = {};

  {/*isLoggedIn() ? (

  	

	) : (

		""

	)*/}


	{user ? (
  	cur_user = user.user.role
    // console.log(user.user.role)
  ) : (
  	cur_user = {}
    // console.log("Please log in to see your profile.")
  )}
  

  {user ? (
  console.log(user.user.role)
	) : console.log("Please log in to see your profile.")}
  

  return (
      <Router>
	      <Routes>

	      		{user === null ? (
	      			<>
				        <Route path="*" element={<Navigate to="/" />} />
			          <Route path="/" element={<Home />} />
			          <Route path="/about-us" element={<AboutUs />} />
			          <Route path="/contact-us" element={<ContactUs />} />
			          <Route path="/shop" element={<Shop />} />
			          <Route path="/login" element={<LoginPage />} />
		          </>
			      ) : user.user.role === 'admin' ? (
			        <>
		        		<Route path="/admin/dashboard" element={<DashboardAdmin />} />
			          <Route path="/admin/users" element={<Users />} />
			          <Route path="/admin/reports" element={<Reports />} />
			          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

			          <Route path="*" element={<Navigate to="/" />} />
			          <Route path="/" element={<Home />} />
			          <Route path="/about-us" element={<AboutUs />} />
			          <Route path="/contact-us" element={<ContactUs />} />
			          <Route path="/shop" element={<Shop />} />
			          <Route path="/login" element={<LoginPage />} />
		        	</>
			      ) : user.user.role === 'user' ? (
			      	<>
			        <Route path="/user/dashboard" element={<DashboardUser />} />

			        	<Route path="*" element={<Navigate to="/" />} />
			          <Route path="/" element={<Home />} />
			          <Route path="/about-us" element={<AboutUs />} />
			          <Route path="/contact-us" element={<ContactUs />} />
			          <Route path="/shop" element={<Shop />} />
			          <Route path="/login" element={<LoginPage />} />
			        </>
			      ) : (
			        <>

			        </>
			      )}
	      	  

          	

          
	      </Routes>

	      {user ? (
			    <Logout/>
			  ) : ''}

	      
	    </Router>
  );
};

export default Routers;