import React from 'react';
import { GraduationCap, LogIn, UserPlus, ChevronRight } from 'lucide-react';
import "/home/godlord/wd301/hello-react/src/index.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">EduAayush</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12">
          <div 
            className="text-center opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Welcome to Student Portal
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Access your academic journey with our comprehensive student management system. 
              Register or login to explore your personalized dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <a 
                  href="/register" 
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <UserPlus className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-semibold text-gray-900">New Student?</h2>
                      <p className="text-gray-600">Create your account</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <a 
                  href="/login" 
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <LogIn className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-semibold text-gray-900">Returning Student?</h2>
                      <p className="text-gray-600">Access your dashboard</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p className="text-sm">
              © 2025 Aayush Pathak.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

