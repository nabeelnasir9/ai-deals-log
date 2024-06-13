// components/Sidebar.js
import {
    AiOutlineUser,
    AiOutlineLogout,
  } from "react-icons/ai";
  import { FaChartPie, FaHome, FaUpload } from "react-icons/fa";
  import { HiChatAlt2 } from "react-icons/hi";
  import { MdHistory } from "react-icons/md";
  
  const menuItems = [
    {
      heading: "Dashboard",
      items: [{ name: "Home", icon: <FaHome />, path: "/intro" }],
    },
    {
      heading: "Personalized",
      items: [
        { name: "Chat Box", icon: <HiChatAlt2 />, path: "/chat-box" },
        { name: "Chat History", icon: <MdHistory />, path: "/chat-history" },
        {
          name: "Upload Document",
          icon: <FaUpload />,
          path: "/upload-document",
        },
      ],
    },
  ];
  
  export default function Sidebar({
    setCurrentView,
    currentView,
    showProfileMenu,
    setShowProfileMenu,
    handleLogout,
    user,
  }) {
    return (
      <div className="w-64 h-full p-4 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col justify-between">
        <div>
          <img src="/casus_white.png" alt="" className="h-10 object-contain"/>
          <div className="border-b-[1px] border-gray-500 mb-5 mt-4"></div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold">
              {user && user.fullName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold">{user && user.fullName}</p>
              <p className="text-sm text-gray-400">{user && user.occupation}</p>
            </div>
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          {menuItems.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-lg font-bold mb-4">{section.heading}</h2>
              {section.items.map((item, idx) => (
                <div key={idx} className="mb-2">
                  <button
                    onClick={() => setCurrentView(item.path)}
                    className={`flex items-center p-2 w-full text-left rounded transition-colors duration-300 ${
                      currentView === item.path
                        ? "bg-gray-700"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className={`flex items-center p-2 w-full text-left rounded transition-colors duration-300 ${
              currentView === "/profile" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <AiOutlineUser />
            <span className="ml-2">Profile</span>
          </button>
          {showProfileMenu && (
            <div className="absolute bottom-12 left-0 w-full bg-gray-800 text-white rounded shadow-lg">
              <button
                onClick={() => setCurrentView("/profile")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                <AiOutlineUser className="inline mr-2" />
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                <AiOutlineLogout className="inline mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  