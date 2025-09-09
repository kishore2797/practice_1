import React from "react";
import "./App.css";
import researcher from "./assets/researcher.png";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">VIAR</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Product</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Function</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Agents</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Resources</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-6 text-gray-900 font-medium rounded-lg transition-colors hover:text-blue-600">
            Log In
          </button>
          <button className="px-4 bg-black text-black font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Try for Free
          </button>
        </div>
      </header>

      {/* MAIN SECTION */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-16 py-16 max-w-7xl gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* New Version Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full shadow">
            🚀 NEW v.3.1 is here!
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Build teams of{" "}
            <span className="text-blue-500">AI Agents</span> that deliver{" "}
            <span className="text-blue-500">Human Quality Works</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Empower your workflow with intelligent AI agents that automate tasks, collaborate seamlessly, and provide results with human-like quality.
          </p>

          {/* CTA Button + Users Text */}
          <div className="flex items-center justify-center lg:justify-start gap-8">
            <button className="px-6 py-3 bg-white text-black text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              Try for Free
            </button>
            {/* Users Badge */}
            <div className="flex items-center px-4 py-2 border border-gray-300 rounded-xl bg-transparent shadow-sm">
              <span className="text-gray-700 text-base font-semibold">15k+ users worldwide</span>
              <span className="ml-2">🌍</span>
            </div>
          </div>
        </div>
        
        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={researcher}
            alt="Researcher"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
