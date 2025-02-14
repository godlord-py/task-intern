import React from 'react';
import StudentPortal from './pages/student/studentportal';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Register from './pages/login/signup';
import Login from './pages/login/signin';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './routes/ProtectedRoutes';
function App() {
  return (
    <BrowserRouter>
          <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<ProtectedRoute element={<StudentPortal />} />} />
        <Route path="/" element={<Home/>} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
  );
}

export default App;
