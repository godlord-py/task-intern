import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GraduationCap, User, Mail, Lock } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    if (response.ok) {
      toast.success('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      toast.error(data.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">EduAayush</span>
            </a>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome!</h1>
            <p className="text-gray-500 text-center p-4">Please sign up your account</p>
          <div className="space-y-4">
            <div className="flex items-center border rounded p-2 space-x-2">
              <User className="h-5 w-5 text-gray-400" />
              <input
                className="w-full outline-none text-black"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded p-2 space-x-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <input
                className="w-full outline-none text-black"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded p-2 space-x-2">
              <Lock className="h-5 w-5 text-gray-400" />
              <input
                className="w-full outline-none text-black"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={handleRegister}
            >
              Register
            </button>
            <p className="text-center text-gray-600 text-sm">
              Already logged in? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
