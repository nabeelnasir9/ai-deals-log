// components/Loader.js
export default function Loader() {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }
  
  <style jsx>{`
    .animate-bounce {
      animation: bounce 1.5s infinite;
    }
  
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }
  `}</style>;
  