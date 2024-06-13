// components/Profile.js
import React from "react";

export default function Profile({ user }) {
  const getInitials = (name) => name.charAt(0).toUpperCase();

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold text-center mb-10">User Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md">
          <div className="w-32 h-32 rounded-full bg-gray-500 text-white flex items-center justify-center text-4xl font-bold shadow-lg mb-6">
            {getInitials(user.fullName)}
          </div>
          <h3 className="text-2xl font-semibold">{user.fullName}</h3>
          <p className="text-gray-400">{user.occupation}</p>
          <p className="text-gray-400">{user.country}</p>
        </div>
        <div className="col-span-2 p-6 bg-gray-700 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
              <div className="space-y-2">
                <p>
                  <strong>Full Name:</strong> {user.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
              <div className="space-y-2">
                <p>
                  <strong>Phone Number:</strong> {user.phoneNumber}
                </p>
                <p>
                  <strong>Country:</strong> {user.country}
                </p>
                <p>
                  <strong>Occupation:</strong> {user.occupation}
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">About</h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
