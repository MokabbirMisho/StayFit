import React, { useState } from "react";
import { priceList } from "../data";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState();

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan.name);
  };

  return (
    <div
      className="bg-gradient-to-l from-slate-700 via-gray-400 to-slate-600 py-12 px-4 md:px-8 lg:px-16"
      id="Price"
    >
      <div className="text-center mb-10">
        <h2 className=" text-4xl font-bold  bg-clip-text  text-amber-300 py-1">
          Pricing Plan
        </h2>
        <p className="text-lg text-gray-100 mt-3">
          Our pricing plan is simple and easy to understand. No hidden price.
        </p>
      </div>

      {/* ------------------------------------Pricing Card------------------------ */}

      <div className="flex flex-wrap justify-center gap-6 ">
        {priceList.map((price, id) => (
          <div
            key={id}
            className="relative  hover:shadow-2xl  hover:scale-105 max-w-sm w-full bg-gradient-to-r from-amber-100/50 via-gray-400 to-pink-200/50 p-8 rounded-2xl
            shadow-lg transform transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-black">{price.name}</h3>
            <p className="text-lg text-gray-800 mb-6">{price.description}</p>
            <p className="text-3xl font-bold text-black mb-4">
              {price.monthly ? (
                <>
                  €{price.monthly}{" "}
                  <span className="text-sm font-bold text-gray-700">
                    / month
                  </span>
                </>
              ) : (
                <>
                  ${price.yearly}{" "}
                  <span className="text-sm font-bold text-gray-700 ">
                    / year
                  </span>
                </>
              )}
            </p>
            <ul className="space-y-3 mb-6">
              {price.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 ${
                    feature.available ? "text-black" : "text-gray-900"
                  }`}
                >
                  {feature.available ? "✅" : "❌"} {feature.text}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleChoosePlan(price)}
              className={`mt-4 w-full py-2 px-4 font-bold rounded-full transition-all duration-300 
                    ${
                      selectedPlan === price.name
                        ? "bg-amber-600 text-white"
                        : "bg-purple-500 text-white hover:bg-purple-700 hover:text-white"
                    }
                  `}
            >
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
