import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests

  const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:4200/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (data.success) {
          localStorage.setItem('username', data.username); // Save username
          localStorage.setItem('email', data.email);       // Save email
          localStorage.setItem('isLoggedIn', 'true');      // Save isLoggedIn flag
          navigate('/dashboard', { replace: true });       // Redirect to dashboard
        }
         else {
          setError(data.message); // Display error message
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Welcome!</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account yet? <a href="/signup" className="text-blue-500 hover:underline">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

