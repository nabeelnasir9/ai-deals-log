"use client";
import { useState } from "react";

const Packages = () => {
  const [currentPackage, setCurrentPackage] = useState("Free Trial");

  const packages = [
    {
      name: "Free",
      price: "$0",
      description: "The essentials to provide your best work for clients.",
      features: [
        "Access to basic AI chatbot features",
        "Up to 100 messages per month",
        "Basic support",
      ],
      recommended: false,
    },
    {
      name: "Basic",
      price: "$9.99/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Access to all AI chatbot features",
        "Up to 1,000 messages per month",
        "Priority support",
        "Customizable responses",
      ],
      recommended: true,
    },
    {
      name: "Pro",
      price: "$29.99/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited messages",
        "Access to advanced AI features",
        "24/7 support",
        "API access",
        "Analytics dashboard",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="flex flex-col h-[100vh] bg-gray-100 p-8 text-gray-800">
      <header className="text-center mb-8 h-[100vh]">
        <h1 className="text-4xl font-bold mb-2">Pricing plans for teams of all sizes</h1>
        <p className="text-gray-600 mb-4">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="inline-flex space-x-2">
          <button className="px-4 py-2 rounded-full bg-gray-800 text-white">Monthly</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800">Annually</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg relative ${
              pkg.recommended
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {pkg.recommended && (
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-bl-lg">
                Recommended
              </div>
            )}
            <h2 className="text-3xl font-bold mb-2">{pkg.name}</h2>
            <p className="text-2xl font-semibold mb-4">{pkg.price}</p>
            <p className="text-center mb-6">{pkg.description}</p>
            <ul className="mb-6 space-y-2 text-left">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✔️</span> {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setCurrentPackage(pkg.name)}
              className={`px-6 py-3 rounded-lg shadow-md text-lg font-semibold ${
                pkg.recommended
                  ? "bg-white text-gray-800"
                  : "bg-gray-800 text-white"
              } hover:bg-gray-700 transition duration-300`}
            >
              Choose {pkg.name}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Current Package</h2>
        <div className="flex justify-center">
          <div className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">{currentPackage}</h3>
            <p className="text-lg mb-4">
              {currentPackage === 'Free Trial'
                ? "Enjoy our features with a Free Trial. Upgrade anytime."
                : packages.find(pkg => pkg.name === currentPackage).features.join(', ')}
            </p>
            <button
              className="px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition duration-300"
              onClick={() => alert(`You are currently on the ${currentPackage} package`)}
            >
              Manage Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
