import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaCommentDots, FaHome, FaUserTie, FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-slate-900 backdrop-blur-md shadow-lg z-50  ">
      <div className=" w-full lg:px-24 mx-auto flex justify-between items-center px-4 py-3">
        {/* {logo} */}
        <div className=" cursor-pointer text-2xl font-bold text-white font-[caveat]">
          <div className="flex">
            StayFit
            <MdSportsGymnastics color="yellow" />
          </div>
        </div>
        {/* navItem */}
        <div className="hidden md:flex gap-8 items-center text-white font-semibold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="trainer"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            <FaUserTie />
            Trainer
          </Link>
          <Link
            to="review"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            <FaCommentDots />
            Reviews
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
          >
            <FaEnvelope />
            Contact Us
          </Link>
        </div>
        {/* toggler */}
        <button
          className=" md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle-menu"
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      {/* mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="trainer"
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Trainer
          </Link>
          <Link
            to="review"
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className=" hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
