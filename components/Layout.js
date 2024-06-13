// components/Layout.js
import Sidebar from "./Sidebar";
import {useState} from "react";

export default function Layout({
  children,
  user,
  handleLogout,
  currentView,
  setCurrentView,
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        showProfileMenu={showProfileMenu}
        setShowProfileMenu={setShowProfileMenu}
        handleLogout={handleLogout}
        setCurrentView={setCurrentView}
        currentView={currentView}
        user={user}
      />
      <main className="flex-1 p-6 bg-white text-blue-500 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
