import React from "react";
import SocialMedia from "./SocialMedia";
import { links } from "../data";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-900 text-white py-5">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="mb-6">
            <p className="text-sm mt-4 text-gray-300">
              Live your life with confidence and power. Start your fitness
              journey today!
            </p>
            <SocialMedia />
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-4 scroll-smooth">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <li color="blue-gray" className="mb-3 font-medium opacity-40">
                  {title}
                </li>
                {items.map((link) => (
                  <li key={link}>
                    <div className="py-1.5 font-normal" id="trainer">
                      <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                        {link}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
            <div className="flex items-center justify-normal">
              <a href="">
                <FaArrowUp className="text-2xl text-amber-400 hover:scale-105 hover:text-3xl transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-blueGray-500 font-semibold py-1">
              <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
                <a href="#" className="font-normal" id="home">
                  StayFit &copy;2025 {}
                </a>
                . All Rights Reserved.
              </p>
              <p className="text-amber-300 italic ">&copy;MokabbirMiso</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
