"use client";
import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useRouter } from "next/navigation";

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    // Simulate file upload
    alert(`Uploading: ${selectedFile.name}`);
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col h-full p-4 rounded-md">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md rounded-md">
        <h1 className="text-xl font-semibold">Upload Document</h1>
      </header>

      <div className="flex-1 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Disclaimer
            </h2>
            <p className="text-sm text-gray-600">
              Please ensure that your document does not contain any sensitive or
              personal information. By uploading, you agree to our terms of
              service and privacy policy.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-200 p-6 rounded-full mb-4">
              <AiOutlineUpload className="text-6xl text-gray-500" />
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded mb-4" />
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-indigo-700 shadow-md"
            >
              Upload
            </button>
            {selectedFile && (
              <p className="mt-4 text-sm text-gray-500">
                Selected file: {selectedFile.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocument;
