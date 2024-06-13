"use client";
import { useState, useEffect } from "react";
import { AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { TbEdit } from "react-icons/tb";


const ChatHistory = () => {
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulated fetch from API
    setHistory([
      {
        id: 1,
        title: "Chat with AI about Next.js",
        firstMessage: "What is Next.js?",
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "Discussion on React",
        firstMessage: "Tell me more about React.",
        createdAt: new Date(),
      },
    ]);
  }, []);

  const handleNewChat = () => {
    router.push("/chat");
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col h-full p-4 rounded-md">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md rounded-md">
        <h1 className="text-xl font-semibold">Chat Histories</h1>
        <button
          className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
          onClick={handleNewChat}
        >
          <AiOutlinePlus className="mr-2" />
          New Chat
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {history.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <AiOutlineMessage className="text-2xl text-gray-500" />
              <div>
                <h2 className="text-lg font-semibold text-black">{chat.title}</h2>
                <p className="text-sm text-gray-500">{chat.firstMessage}</p>
              </div>
            </div>
            <div>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-5">
            <TbEdit size={25} color="#000000"/>

              {formatDate(new Date(chat.createdAt))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
