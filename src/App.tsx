import React, { useContext } from 'react';
import StudentPortal from './pages/student/studentportal';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Register from './pages/login/signup';
import Login from './pages/login/signin';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './routes/ProtectedRoutes';
import { ThemeContext } from './context/theme';
import Profile from './pages/student/profile';
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <div
      className={`h-screen w-full mx-auto py-2  ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
    {/*BrowserRouter is used to wrap the Routes */}
    <BrowserRouter>
          <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<ProtectedRoute element={<StudentPortal />} />} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
