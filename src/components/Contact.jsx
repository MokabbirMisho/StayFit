// import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div
//       className="bg-gradient-to-b from-gray-700 via-gray-500 to-slate-700  gap-6  text-white px-6 py-8"
//       id="contact"
//     >
//       <h2
//         className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r
//           from-amber-400 to-pink-300 mb-10"
//       >
//         Get in Touch
//       </h2>

//       <div className=" flex flex-wrap justify-center gap-6 ">
//         <div className="bg-gray-700 rounded-2xl space-y-4 py-6 px-3 hover:scale-105 transform transition-transform h-2/4 mb-2">
//           <div>
//             <h2 className="text-2xl font-bold text-blue-300">Our Loaction</h2>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
//             <span className="font-bold text-lg">Address:</span>
//             <h3 className="text-lg">StreetStraẞe 45, 487752 Mulheim</h3>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaPhoneAlt className="w-5 h-5 text-amber-400" />
//             <span className="font-bold text-lg">Phone:</span>
//             <h3 className="text-lg">+022 225 455</h3>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaEnvelope className="w-5 h-5 text-blue-400" />
//             <span className="font-bold text-lg">E-Mail:</span>
//             <h3 className="text-lg">contact@email.com</h3>
//           </div>
//         </div>
//         <div className="bg-gray-700 rounded-2xl space-y-4 py-3 px-3 w-1/4">
//           <div>
//             <h2 className="text-md sm:text-2xl  font-bold text-blue-300">
//               Contact Us
//             </h2>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">
//               Your Name:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Name"
//               className="w-full  p-3 rounded-lg bg-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               className="w-full  p-3 rounded-lg bg-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold mb-2">Message</label>
//             <textarea
//               type="textarea"
//               placeholder="Write your message"
//               className="w-full  p-3 rounded-lg bg-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//             ></textarea>
//           </div>
//           <button className="w-full p-3 bg-blue-400 top-6 rounded-lg text-lg font-semibold  transition">
//             Send Message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-l from-slate-700 via-gray-400 to-slate-600 text-white px-6 py-12"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center bg-clip-text  text-amber-300 mb-10">
        Get in Touch
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Location Card */}
        <div className="bg-gray-700 rounded-2xl p-6 shadow-md w-full max-w-md hover:scale-105 transform transition-transform">
          <h2 className="text-lg font-bold text-blue-300 mb-4">Our Location</h2>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-md">Address:</span>
              <p className="text-md">StreetStraẞe 45, 487752 Mulheim</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-md">Phone:</span>
              <p className="text-md">+022 225 455</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-md">E-Mail:</span>
              <p className="text-md">contact@email.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-700 rounded-2xl p-6 shadow-md w-full max-w-lg">
          <h2 className="text-lg font-bold text-blue-300 text-center mb-4">
            Contact Us
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Message:
              </label>
              <textarea
                placeholder="Write your message"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
