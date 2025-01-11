import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaItunesNote, FaRegCommentDots } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import RadioPlayer from "./RadioPlayer";
import LiveChat from "./LiveChat";
import SongRequest from "./SongRequest";
import background from "../assets/images/bg-image.jpg";

const Settings = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 transition-shadow bg-white rounded-lg shadow-md h-80 hover:shadow-lg w-96">
      <h3 className="mb-4 text-lg font-semibold text-yellow-800">Settings</h3>
      <p className="text-center text-gray-600">Manage your preferences here.</p>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("radio");
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isSongReqOpen, setIsSongReqOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* RadioPlayer always visible */}
      <main className="relative z-0 flex items-center justify-center flex-grow p-6 mb-20">
        <RadioPlayer />
      </main>

      {/* Live Chat Modal */}
      {isLiveChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-auto bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsLiveChatOpen(false)}
              className="absolute text-white top-2 right-2 hover:text-red-600"
            >
              ✖
            </button>
            <LiveChat />
          </div>
        </div>
      )}

      {isSongReqOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-auto bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsSongReqOpen(false)}
              className="absolute text-red-600 top-2 right-2 hover:text-red-800"
            >
              ✖
            </button>
            <SongRequest />
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <header className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around p-4 text-white bg-blue-600 shadow-md">
        {/* Live Chat Button */}
        <button
          onClick={() => setIsLiveChatOpen(true)}
          className={`flex flex-col items-center gap-1 px-2 py-1 transition ${
            activeTab === "livechat" ? "text-yellow-400" : "text-white"
          }`}
        >
          <FaRegCommentDots size={24} />
          <span className="text-sm">Live Chat</span>
        </button>

        {/* Song Request Button */}
        <button
          onClick={() => setIsSongReqOpen("settings")}
          className={`flex flex-col items-center gap-1 px-2 py-1 transition ${
            activeTab === "settings" ? "text-yellow-400" : "text-white"
          }`}
        >
          <FaItunesNote size={24} />
          <span className="text-sm">Song Request</span>
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center gap-1 px-2 py-1 text-red-500 hover:text-red-600"
        >
          <CiLogout size={24} />
          <span className="text-sm">Logout</span>
        </button>
      </header>
    </div>
  );
};

export default Dashboard;
