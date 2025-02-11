import React from "react";
import SocialMedia from "./SocialMedia";
import {
  FaDumbbell,
  FaHeartbeat,
  FaPlay,
  FaRunning,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMedal,
  FaThumbsUp,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";
import bgimage from "../assets/bannertop.png";

const Banner = () => {
  return (
    <div>
      {/* ---------------------------Banner section------------------------------- */}
      <div
        id="home"
        className="relative h-screen bg-gradient-to-r from-slate-700 via-gray-400 to-slate-60 overflow-hidden flex flex-col
      lg:flex-row items-center justify-center lg:justify-between"
      >
        {/* -------------------------content section---------------------------- */}
        <div
          className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-slate-600 via-transparent h-full 
        w-full lg:w-1/2"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold mb-6
          animate-slideInLeft text-center lg:text-left"
          >
            Elevate your <span className="text-yellow-500">Workout</span>
          </h1>
          <p className="text-sm sm.text-base md:text-lg mb-8 animate-slideInLeft delay-200  lg:text-left">
            Every time you step into the gym, onto the track, or into your
            workout space, you have a choice. You can go through the motions, or
            you can show up with intensity, with purpose, and with a mindset to
            grow.
          </p>

          {/* ------------------icons section------------------------ */}
          <div
            className="flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start
          mb-8 animate-fadeIn delay-400"
          >
            <div className="flex items-center gap-3 group">
              <FaDumbbell className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-sm sm:text-lg font-small">
                Strength Training
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <FaHeartbeat className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-sm sm:text-lg font-small">
                Cardio Workout
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <FaRunning className="text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-sm sm:text-lg font-small">Endurance</span>
            </div>
          </div>

          {/* ------------------ Buttons ------------------------- */}

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            <button
              className="px-4 sm:px-6 py-2 bg-yellow-400 text-black font-semibold
          rounded-full hover:bg-yellow-600 transition-transform transform 
          hover:scale-105 delay-500"
            >
              Get Started
            </button>
            <button
              className="px-4 sm:px-6 py-2 bg-gray-300 text-black font-semibold
          rounded-full hover:bg-yellow-100 transition-transform transform 
          hover:scale-105 delay-500 flex items-center gap-2"
            >
              <FaPlay className="text-black text-xl" /> Watch Demo
            </button>
          </div>

          {/* ---------------------social media-------------------- */}

          <SocialMedia />
        </div>

        {/* ---------------------Background image-------------------------------- */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={bgimage}
            alt="bg"
            className="w-full h-full object-content opacity-90 animate-"
          />
        </div>
      </div>

      {/* --------------------------------Badge section--------------------------------- */}
      <div className="bg-slate-700 py-12 sm:py-16 text-white ">
        <div className="container mx-auto px-4 sm:px-8 text-center ">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className=" flex flex-col  items-center gap-4 animate-fadeIn delay-200">
              <FaMedal className="text-amber-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                5+ Years of Services
              </span>
            </div>
            <div className=" flex flex-col  items-center gap-4 animate-fadeIn delay-400">
              <FaCertificate className="text-amber-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                50+ Certified Trainers
              </span>
            </div>
            <div className=" flex flex-col  items-center gap-4 animate-fadeIn delay-600">
              <FaUsers className="text-amber-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                1000+ Happy Members
              </span>
            </div>
            <div className=" flex flex-col  items-center gap-4 animate-fadeIn delay-800">
              <FaThumbsUp className="text-amber-500 text-3xl sm:text-4xl" />
              <span className="text-sm sm:text-lg md:text-xl font-semibold">
                95% Customer Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
