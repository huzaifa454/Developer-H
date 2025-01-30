import React from "react";
import pic from "../assets/image2.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-white cursor-default px-6 py-8"
    >
      <motion.h1
        className="text-primaryfont-serif text-primary text-6xl md:text-8xl font-extrabold relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white">Get in</span>Touch
      </motion.h1>
      <p className="text-center text-lg mt-4 max-w-2xl">
        We are excited to collaborate and bring your ideas to life. Whether you
        have a question or want to discuss a potential project, feel free to
        reach out using the options below
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mt-12 space-y-8 md:space-y-0">
        {/* Phone Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <FaPhoneAlt className="text-primary text-5xl mb-4" />
          <h2 className="text-xl font-bold">Phone</h2>
          <p className="text-lg">032-5220-8246</p>
          <p className="text-sm text-primary">Mon-Fri, 9am - 6pm</p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={pic}
            alt="Contact"
            className="w-48 h-48 rounded-full border-4 border-primary shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <FaEnvelope className="text-primary text-5xl mb-4" />
          <h2 className="text-xl font-bold">Email</h2>
          <p className="text-lg">zhdevelopers0@gmail.com</p>
          <p className="text-sm text-primary">We respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
