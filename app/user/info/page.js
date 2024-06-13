"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaUser, FaBriefcase, FaGlobe, FaPhone } from "react-icons/fa";
import { GlobeDemo } from "@/components/orbiting-circles";

export default function UserInfo() {
  const [formData, setFormData] = useState({
    fullName: "",
    occupation: "",
    country: "",
    phoneNumber: ""
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (data.fullName && data.occupation && data.country && data.phoneNumber) {
          router.push("/home");
        } else {
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("/api/auth/updateUser", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      router.push("/home");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <GlobeDemo />
      </div>
      <div className="relative z-10 p-8 bg-white bg-opacity-80 shadow-lg rounded-lg max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">User Information</h2>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-gray-400" />
            </span>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaBriefcase className="text-gray-400" />
            </span>
            <input
              name="occupation"
              type="text"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaGlobe className="text-gray-400" />
            </span>
            <input
              name="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaPhone className="text-gray-400" />
            </span>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}