import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-200 px-6">
      
      <div className="text-center space-y-6">
        
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
          404
        </h1>

        {/* Glow effect */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-gray-300 opacity-40 rounded-full"></div>
          <h2 className="relative text-2xl md:text-3xl font-semibold text-gray-700">
            Oops! Page not found
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Try going back to the homepage.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <ArrowLeft size={18} />
          Go Back Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;