import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai"; // Login/Signup icons
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className=" text-black">
      {/* Upper Section: Phone, Email and Social Media Icons */}
      <div className=" bg-[#f7f7f7] hidden md:flex justify-between md:px-10 items-center border-b-[1.3px] border-gray-500 py-3">
        <div className="text-sm">
          <span>Phone: 956 742 455 678 | Email:info@ddsgnr.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="hover:text-blue-600" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-blue-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-pink-500" />
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Logo and Navigation Links (Visible on Mobile and Desktop) */}
      <div className=" md:bg-[#f7f7f7] md:border-none border-b-[1.3px] border-gray-500  md:mt-3 flex justify-between  items-center py-2 px-5">
        <div className="text-xl font-bold text-black flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={120}
            height={40}
            layout="intrinsic" 
            className="mr-4"
          />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-5 bg-white py-1 px-5">
          <a href="#Home" className="hover:text-gray-700 hover:border-b border-gray-500">
            Home
          </a>
          <a href="#Courses" className="hover:text-gray-700 hover:border-b border-gray-500 ">
            Courses
          </a>
          <a href="#Services" className="hover:text-gray-700 hover:border-b border-gray-500">
            Services
          </a>
          <a href="#Achievements" className="hover:text-gray-700 hover:border-b border-gray-500">
            Achievements
          </a>
          <a href="#About" className="hover:text-gray-700 hover:border-b border-gray-500">
            About Us
          </a>
          <a href="#Testimontial" className="hover:text-gray-700 hover:border-b border-gray-500">
          Testimonial
          </a>
        </div>

        {/* Login and Signup Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="px-3 py-1.5 border-[1.4px] bg-white border-black text-black rounded hover:bg-gray-100 text-sm flex items-center">
            <AiOutlineLogin className="mr-2" />
            Login
          </button>
          <button className="px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800 text-sm flex items-center">
            <AiOutlineUserAdd className="mr-2" />
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black text-2xl"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu: Shows when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <a href="#" className="block py-2 text-black">
            Home
          </a>
          <a href="#about" className="block py-2 text-black">
            About
          </a>
          <a href="#services" className="block py-2 text-black">
            Services
          </a>
          <a href="#contact" className="block py-2 text-black">
            Contact
          </a>
          <div className="flex flex-col mt-4">
            <button className="mb-2 px-3 py-1.5 border-2 border-black text-black rounded-md hover:bg-gray-200 text-sm flex items-center">
              <AiOutlineLogin className="mr-2" />
              Login
            </button>
            <button className="px-3 py-1.5 bg-black text-white rounded-md hover:bg-gray-800 text-sm flex items-center">
              <AiOutlineUserAdd className="mr-2" />
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
