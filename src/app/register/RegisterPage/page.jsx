'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import logo from '../../../../public/assets/logo.png'; // Ensure the logo is in the public folder

const RegisterPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        firstname: firstName,
        lastname: lastName,
        gender
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage(`${response.data.username} created successfully!`);
      setUsername('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setConfirmPassword('');
      setGender('');
      router.push('/'); // Redirect to login or homepage
    } catch (error) {
      setMessage(error.response?.data.detail || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg flex flex-col items-center">
        <Image src={logo} alt="Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-xl font-bold mb-4">Register</h1>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Gender dropdown */}
        <select
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          defaultValue=""
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button onClick={handleRegister} className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
        <button onClick={() => router.push('/news')} className="w-full bg-gray-500 text-white p-2 rounded mt-2">Enter Home</button>

        {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
