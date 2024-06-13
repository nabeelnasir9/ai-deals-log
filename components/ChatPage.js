"use client";
import { useState, useEffect, useRef } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [totalTokens, setTotalTokens] = useState(0);
  const messageBoxRef = useRef(null);
  const suggestions = [
    "Create a blog post about NextUI",
    "Give me 10 ideas for my next blog post",
    "Compare NextUI with other UI libraries",
  ];

  useEffect(() => {
    setMessages([
      { id: 1, type: "user", content: "Hello, how are you?" },
      { id: 2, type: "response", content: "I'm good, thank you!" },
    ]);
    setTotalTokens(15);
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { id: Date.now(), type: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setTimeout(() => {
      const responseMessage = {
        id: Date.now(),
        type: "response",
        content: "This is a simulated response.",
      };
      setMessages((prev) => [...prev, responseMessage]);
      setTotalTokens(
        (prev) => prev + input.length + responseMessage.content.length
      );
    }, 1000);
  };

  useEffect(() => {
    messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col h-full rounded-md">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md rounded-md">
        <h1 className="text-xl font-semibold">Chat with AI</h1>
        <span className="text-sm">Total Tokens: {totalTokens}</span>
      </header>

      <div ref={messageBoxRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={message.id}>
            {message.type === "user" && (
              <div className="flex items-center justify-start mb-2">
                <FaUserCircle className="text-2xl text-gray-600 mr-2" />
                <div className="p-3 rounded-lg max-w-lg shadow bg-white text-black text-left">
                  {message.content}
                </div>
              </div>
            )}
            {message.type === "response" && (
              <div className="flex items-center justify-start mb-2">
                <BsRobot className="text-2xl text-gray-500 mr-2" />
                <div className="p-3 rounded-lg max-w-lg shadow bg-white text-black text-left">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex gap-2 mb-4">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-300"
              onClick={() => setInput(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
        <footer className="flex items-center">
          <button
            className="text-2xl p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => alert("Open upload document modal")}
          >
            <AiOutlinePaperClip color="gray" />
          </button>
          <input
            type="text"
            className="flex-1 mx-4 p-2 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-500 shadow-md"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ChatPage;
