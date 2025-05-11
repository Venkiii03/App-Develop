import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password) {
      login({ email });
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">📝 Sign Up</h2>
        <input
          type="email"
          className="w-full mb-3 p-2 rounded text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-3 p-2 rounded text-black"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          onClick={handleSignup}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
