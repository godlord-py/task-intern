import React, { useState } from 'react';
import { Bell, User, LogOut, Book, Calendar, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const sidebarItems = [
  { id: 'dashboard', icon: User, label: 'Dashboard' },
  { id: 'courses', icon: Book, label: 'Courses' },
  { id: 'schedule', icon: Calendar, label: 'Schedule' },
  { id: 'applications', icon: FileText, label: 'Applications' }
];

const StudentPortal = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-800">University Insights Intern Aayush</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700"><Bell size={20} /></button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">SK</div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-sm transition-all p-4`}>
          {sidebarItems.map(({ id, icon: Icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center space-x-3 p-3 rounded-lg w-full ${activeTab === id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Icon size={20} />
              {isSidebarOpen && <span>{label}</span>}
            </button>
          ))}
          <button className="flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 w-full mt-8" onClick={handleLogout}>
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </aside>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ label: 'Active Applications', count: 3, color: 'text-blue-600' },
              { label: 'Enrolled Courses', count: 4, color: 'text-green-600' },
              { label: 'Upcoming Events', count: 2, color: 'text-purple-600' }
            ].map(({ label, count, color }) => (
              <div key={label} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{label}</h3>
                <p className={`text-3xl font-bold ${color}`}>{count}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Application Updated</h4>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentPortal;
