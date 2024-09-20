"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Get your website WPAC compliant
      </h1>
      <button onClick={() => router.push("/Onboarding")} className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Get Started
      </button>
    </div>
  );
};

export default Page;
