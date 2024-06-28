import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // <-- Corrected import
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      // Optionally, fetch more user data from your backend
      // axios.get(`/api/user/${decodedToken.id}`, {
      //   headers: { 'Authorization': `Bearer ${token}` }
      // })
      // .then(response => setUser(response.data))
      // .catch(err => console.error(err));+

      axios.get(`http://localhost:5000/api/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => setUser(response.data))
      .catch(err => console.error(err));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
