'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import logo from '../../../../public/assets/logo.png'; // Ensure the logo is placed in the public folder

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', new URLSearchParams({
        username,
        password
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      localStorage.setItem('token', response.data.access_token);
      router.push('/news');
    } catch (error) {
      setErrorMessage(error.response?.data.detail || 'Login failed');
    }
  };

  return (
    <div className="login-page flex justify-center items-center min-h-screen bg-gray-100">
      <div className="login-container bg-white p-8 shadow-md rounded-lg flex flex-col items-center">
        <Image src={logo} alt="Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-xl font-bold mb-4">Welcome</h1>
        <input
          className="w-full p-2 mb-2 border rounded"
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-2 border rounded"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="text-red-500 text-sm mb-2">{errorMessage}</p>}
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        <button onClick={() => router.push('/register')} className="w-full bg-gray-500 text-white p-2 rounded mt-2">Register</button>
      </div>
    </div>
  );
};

export default LoginPage;