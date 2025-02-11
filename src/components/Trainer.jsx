import React from "react";
import trainer1 from "../assets/1.jpg";
import trainer2 from "../assets/2.jpg";
import trainer3 from "../assets/3.jpg";
import trainer4 from "../assets/4.jpg";
import trainer5 from "../assets/5.jpg";
import trainer6 from "../assets/6.jpg";

const trainers = [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6];

const Trainer = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-700 via-gray-400 to-slate-600 py-12"
      id="trainer"
    >
      {/* --------------------Head Section------------------ */}

      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
          <span className="bg-clip-text  text-amber-300">
            Meet Our Trainers
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-100 font-medium mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolorum
          eius amet veniam ea repudiandae praesentium! Repellat accusamus qui ad
          alias mollitia voluptatem tempore culpa officia, aspernatur quos,
          cupiditate voluptates!
        </p>
      </div>

      {/* -------------------trainer images----------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 lg:px-20">
        {trainers.map((src, id) => (
          <div
            key={id}
            className="group relative overflow-hidden rounded-xl shadow-lg
            bg-gradient-to-br from-gray-800 to-gray-900 transition-transform transform
            hover:scale-105"
          >
            <img
              src={src}
              alt={`Trainer ${id + 1}`}
              className="w-full object-cover transition-transform duration-300 "
            />

            {/* ------------------------- Trainer info---------------------------- */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0
                group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end  p-4
            "
            >
              <h3 className="text-lg md:text-xl font-bold text-amber-500 mb-1">
                Trainer {id + 1}
              </h3>
              <p className="text-sm md:text-sm text-gray-200">
                Certfied Fitness & Nutrition Coach
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
