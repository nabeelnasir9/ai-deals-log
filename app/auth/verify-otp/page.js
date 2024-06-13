"use client";
import { useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { GlobeDemo } from "@/components/orbiting-circles";

export default function VerifyOtp() {
  const [formData, setFormData] = useState({ email: '', otp: ['', '', '', '', '', ''] });
  const router = useRouter();
  const inputs = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });

      if (value && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const otpString = formData.otp.join('');
      await axios.post('/api/auth/verifyOtp', { email: formData.email, otp: otpString });
      router.push('/auth/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <GlobeDemo />
      </div>
      <div className="relative z-10 p-8 bg-white bg-opacity-80 shadow-lg rounded-lg max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Verify OTP</h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <div className="flex justify-center space-x-2">
            {formData.otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                ref={(el) => (inputs.current[index] = el)}
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
