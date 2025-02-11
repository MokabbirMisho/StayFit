import React from "react";
import { data } from "../data";
import image1 from "../assets/wcu1.jpg";
import image2 from "../assets/wcu2.jpg";
import image3 from "../assets/wcu3.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-l from-slate-700 via-gray-400 to-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* ------------------------------Heading section-------------------------- */}

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-2xl lg:text-4xl font-semibold  text-amber-300 ">
            Why Choose Us
          </h2>
          <p className="mt-4 text-white text-sm sm:text-base lg:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            obcaecati quod aliquam tempora sequi tempore?
          </p>
        </div>

        {/* ----------------------content section------------------------------ */}

        <div className=" flex flex-col lg:flex-row items-start gap-12">
          {/* -------------------------left section----------------------------*/}

          <div className=" lg:w-1/2 w-full">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {data.map((box, index) => (
                <div
                  key={index}
                  className="felx flex-col justify-center items-center space-x-4 p-6 bg-gradient-to-r from-violet-200 to-pink-200 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <h4 className="text-center text-md font-semibold sm:text-xl">
                    {box.title}
                  </h4>
                  <p className="text-sm sm:text-md font-normal text-center">
                    {box.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------right section--------------------------------- */}

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <div className="grid grid-rows-2 gap-6">
                <img
                  src={image1}
                  alt="image1"
                  className="w-full h-full object-cover rounded-lg shadow-lg broder border-rose-50
                hover:scale-105 transition-transform delay-300"
                  loading="lazy"
                />
                <img
                  src={image2}
                  alt="image2"
                  className="w-full h-full object-cover rounded-lg shadow-lg broder border-rose-50
                hover:scale-105 transition-transform delay-300"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={image3}
                  alt="image3"
                  className="w-full h-full object-cover rounded-lg shadow-lg broder border-rose-50
                hover:scale-105 transition-transform delay-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
