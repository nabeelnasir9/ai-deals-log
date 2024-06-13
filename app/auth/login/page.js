"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { GlobeDemo } from "@/components/orbiting-circles";
import { FcGoogle } from "react-icons/fc";
import FullPageLoader from "@/components/FullPageLoader";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", data.token);

      const userInfo = await axios.get("/api/auth/user", {
        headers: { Authorization: `Bearer ${data.token}` },
      });

      if (
        !userInfo.data.fullName ||
        !userInfo.data.occupation ||
        !userInfo.data.country ||
        !userInfo.data.phoneNumber
      ) {
        router.push("/user/info");
      } else {
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center relative">
      <FullPageLoader loading={loading} />
      <div className="absolute inset-0 flex items-center justify-center">
        <GlobeDemo />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8"
      >
        <div className="flex items-center mb-8">
          <img
            src="/Casus_blue.png"
            alt="logo"
            className="h-[40px] w-[170px] mb-4 contain"
          />
        </div>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-8 text-center">Log in to your account</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </span>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Login
          </button>
          <div className="flex items-center justify-center mt-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="flex-shrink mx-4 text-gray-600">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm flex items-center justify-center text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out">
              <FcGoogle className="h-5 w-5 mr-2" />
              Log in with Google
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-gray-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
