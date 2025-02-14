import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GraduationCap, User, BookOpen, Hash } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../context/theme';


const  Profile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://task-intern-n5bn.onrender.com/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setStudent(data);
        } else {
          toast.error(data.message || 'Failed to load profile');
        }
      } catch (error) {
        toast.error('An error occurred while fetching profile');
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading profile...</p>;
  if (!student) return <p className="text-center mt-10 text-red-500">No profile data found.</p>;

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-900' : 'bg-white text-gray-800'}`}>
      <div className={`bg-white p-8 rounded-lg shadow-lg w-96 ${theme === 'dark' ? 'bg-gray-700 text-gray-900' : 'bg-white text-gray-800'}`}>
        <div className="text-center mb-6">
          <GraduationCap className="h-12 w-12 text-blue-600 mx-auto" />
          <h1 className="text-2xl font-bold text-black">Student Profile</h1>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border rounded p-2 space-x-2">
            <User className="h-5 w-5 text-gray-400" />
            <span>{student.name}</span>
          </div>
          <div className="flex items-center border rounded p-2 space-x-2">
            <BookOpen className="h-5 w-5 text-gray-400" />
            <span>Year: {student.year}</span>
          </div>
          <div className="flex items-center border rounded p-2 space-x-2">
            <GraduationCap className="h-5 w-5 text-gray-400" />
            <span>College: {student.college}</span>
          </div>
          <div className="flex items-center border rounded p-2 space-x-2">
            <BookOpen className="h-5 w-5 text-gray-400" />
            <span>Section: {student.section}</span>
          </div>
          <div className="flex items-center border rounded p-2 space-x-2">
            <Hash className="h-5 w-5 text-gray-400" />
            <span>Roll No: {student.rollNo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
