import React from "react";
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

const SocialMedia = () => {
  return (
    <div className="flex gap-6 mt-4 animate-fadeIn delay-800 justify-center lg:justify-start">
      <a
        href="#"
        aria-label="FaceBook"
        className="text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110"
      >
        <FaFacebook />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-red-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110"
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        aria-label="Twitter"
        className="text-blue-400 text-2xl sm:text-3xl transition-transform transform hover:scale-110"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
