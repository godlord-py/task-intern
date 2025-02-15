import React, { useContext, useState } from 'react';
import { Bell, User, LogOut, Book, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '/src/context/theme';
import ThemeToggle from '/src/pages/UI/themebutton';
import Profile from '/src/pages/student/profile';

//defined sidebar items
const sidebarItems = [
  { id: 'dashboard', icon: User, label: 'Dashboard' },
  { id: 'courses', icon: Book, label: 'Profile' },
  { id: 'applications', icon: FileText, label: 'Applications' }
];

const StudentPortal = () => {
  //defined states for sidebar, activeTab
  const navigate = useNavigate();
  //used theme context
  const { theme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  //fetching name and email from local storage
  const name = localStorage.getItem('name') || 'Student';
  const email = localStorage.getItem('email') || 'Not available';

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/login');
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {[{ label: 'Active Applications', count: 3, color: 'text-blue-600' },
                { label: 'Enrolled Courses', count: 4, color: 'text-green-600' },
                { label: 'Upcoming Events', count: 2, color: 'text-purple-600' }
              ].map(({ label, count, color }) => (
                <div key={label} className={`p-6 rounded-lg shadow-sm ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{label}</h3>
                  <p className={`text-3xl font-bold ${color}`}>{count}</p>
                </div>
              ))}
            </div>
            <div className={`mt-8 rounded-lg shadow-sm p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className={`flex items-center space-x-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <h4 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} font-medium`}>
                      Application Updated
                    </h4>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'courses':
        return <Profile />;
      case 'applications':
        return (
          <div>
            <h2 className="text-xl font-semibold">Applications</h2>
            <p className="mt-4">Here you can view your applications.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-all ${theme === 'dark' ? 'dark:bg-[#111010] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`shadow-sm flex justify-between p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">University Insights Intern Aayush</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-gray-500 hover:text-gray-700"><Bell size={20} /></button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">SK</div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} transition-all p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          {sidebarItems.map(({ id, icon: Icon, label }) => (
            <button 
              key={id} 
              onClick={() => {
                setActiveTab(id);
              }} 
              className={`flex items-center space-x-3 p-3 rounded-lg w-full 
                ${activeTab === id 
                  ? theme === 'dark' ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600' 
                  : theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Icon size={20} />
              {isSidebarOpen && <span>{label}</span>}
            </button>
          ))}
          <div className={`mt-8 p-4 rounded-lg text-center text-sm ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-gray-500">{email}</p>
          </div>

          <button className={`flex items-center space-x-3 p-3 rounded-lg w-full mt-8 ${theme === 'dark' ? 'text-red-400 hover:bg-red-700' : 'text-red-600 hover:bg-red-50'}`} 
            onClick={handleLogout}>
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </aside>

        <main className="flex-1 p-6">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
};

export default StudentPortal;