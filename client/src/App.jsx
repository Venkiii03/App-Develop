import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trends from './pages/Trends';
import History from './pages/History';
import Watchlist from './pages/Watchlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/Protectedroute';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/trends"
          element={<ProtectedRoute><Trends /></ProtectedRoute>}
        />
        <Route
          path="/history"
          element={<ProtectedRoute><History /></ProtectedRoute>}
        />
        <Route
          path="/watchlist"
          element={<ProtectedRoute><Watchlist /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
