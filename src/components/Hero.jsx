import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.open("https://www.leetcode.com", "_blank");
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="main.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="flex justify-end space-x-4 p-4">
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-white font-semibold text-xl rounded-full shadow-xl transition-transform transform hover:scale-110 animate-bounce"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-white font-semibold text-xl rounded-full shadow-xl transition-transform transform hover:scale-110 animate-bounce"
          >
            SignUp
          </button>
        </div>

        <h1 className="text-8xl md:text-8xl font-extrabold mb-6 animate-fadeIn">
          <span className="block bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 text-transparent bg-clip-text drop-shadow-lg shadow-yellow-300 rounded-lg animate-pulse ">
            Welcome to Questoria
          </span>
        </h1>
        <p className="text-lg md:text-4xl mb-8 animate-fadeIn delay-500">
          Challenge yourself or compete with friends!
        </p>

        <div className="flex space-x-6">
          <button
            onClick={() => navigate("/create-quiz")}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black text-white font-semibold text-xl rounded-full shadow-xl transition-transform transform hover:scale-110 animate-bounce"
          >
            Create New Quiz
          </button>
          <button
            onClick={() => navigate("/join-quiz")}
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white text-white font-semibold text-xl rounded-full shadow-xl transition-transform transform hover:scale-110 animate-bounce"
          >
            Join Quiz
          </button>
          <button
            onClick={() => navigate("/quote")}
            className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white text-white font-semibold text-xl rounded-full shadow-xl transition-transform transform hover:scale-110 animate-bounce"
          >
            Quote of the Day
          </button>
        </div>
        <div className="absolute bottom-12 flex justify-center w-full">
          <button
            onClick={handleButtonClick}
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="logo.webp" // Replace with your logo URL
              alt="Logo"
              className="w-6 h-6 mr-3" // Small logo size and margin to the right
            />
            Solve POTD to Earn Coins
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
