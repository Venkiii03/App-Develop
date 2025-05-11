import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold animate-fade-in mb-6">Welcome to SmartStocker.</h1>
      <p className="text-xl mb-8 text-gray-300">
        Analyze stock trends, view predictions, and manage your investments smarter.
      </p>
      <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white font-semibold">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
