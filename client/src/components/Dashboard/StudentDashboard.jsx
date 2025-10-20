import React, { useState } from 'react';
import StuSidebar from './StuSidebar/StuSidebar.jsx';
import StuMain from './StuMain/StuMain.jsx';

const StudentDashboard = () => {
    // State to control sidebar visibility
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden" style={{ backgroundColor: "#F3EFDA", color: "#3B132A" }}>
            {/* Sidebar */}
            <StuSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main content */}
            <div className="flex-1 overflow-auto">
                <StuMain sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>
        </div>
    );
};

export default StudentDashboard;
