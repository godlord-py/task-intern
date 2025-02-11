import React from 'react';

const StudentPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-semibold text-gray-800">University Insights</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">Button</button>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                Aayush
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default StudentPortal;
