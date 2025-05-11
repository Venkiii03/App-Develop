import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">📊 SmartStocker</Link>

        <div className="flex space-x-6 text-white font-medium">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
              <Link to="/trends" className="hover:text-blue-300">Market Trends</Link>
              <Link to="/history" className="hover:text-blue-300">History</Link>
              <Link to="/watchlist" className="hover:text-blue-300">Watchlist</Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-300">Login</Link>
              <Link to="/signup" className="hover:text-blue-300">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
