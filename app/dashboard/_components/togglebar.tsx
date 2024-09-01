import React, { useState } from 'react';
import Header from './Header';
import SideNav from './sideNav';

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen flex">
      <SideNav isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-5">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
