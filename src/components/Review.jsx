import React from "react";
import { reviews } from "../data";
import StarRatings from "./StarRatings";

const Review = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-700 via-gray-400 to-slate-600 py-12 px-4 md:px-8 lg:px-16"
      id="review"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
          <span className="bg-clip-text  text-amber-300">
            Community Reviews
          </span>
        </h2>
        <p className="mt-4 text-md font-medium text-white">
          What people thinks about us
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-10 ">
        {reviews.map((review, id) => (
          <div
            key={id}
            className="mx-15 relative  hover:shadow-2xl  hover:scale-105 max-w-sm w-full bg-gradient-to-r from-amber-100/50 via-gray-400 to-pink-200/50 p-8 rounded-2xl
          shadow-lg transform transition-all duration-500"
          >
            <h3 className="text-xl font-semibold text-black mt-2 mb-2">
              {review.name}
            </h3>
            <StarRatings stars={review.stars} />
            <p className="text-gray-900 text-md italic mt-2">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <button className="  bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-xl hover:from-blue-600 hover:to-pur700 transform hover:scale-110 transition-transform duration-300">
          Add Your Review
        </button>
      </div>
    </div>
  );
};

export default Review;
