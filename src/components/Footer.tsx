import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-white text-gray-800 pt-7">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Column - Logo */}
        <div className="md:mx-1 mx-auto">
          <Image
           src="/Logo.png"
           alt="Logofooter"
           width={120}
           height={40}
           layout="intrinsic" 
            className="max-w-full h-auto" />
        </div>

        {/* Second Column - Courses */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800">Courses</h4>
          <ul className="text-sm text-gray-600 mt-2 space-y-4">
            <li><a href="#" className="hover:text-gray-400">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-gray-400">Web Development</a></li>
            <li><a href="#" className="hover:text-gray-400">Graphic Design</a></li>
            <li><a href="#" className="hover:text-gray-400">Product Design</a></li>
          </ul>
        </div>

        {/* Third Column - Resources */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800">Resources</h4>
          <ul className="text-sm text-gray-600 mt-2 space-y-4">
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
          </ul>
        </div>

        {/* Fourth Column - About Us */}
        <div className="text-center sm:text-left">
          <h4 id='About' className="font-semibold text-gray-800">About Us</h4>
          <ul className="text-sm text-gray-600 mt-2 space-y-4">
            <li><a href="#" className="hover:text-gray-400">Our Story</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Newsletter & Privacy Policy */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-semibold">Subscribe to our newsletter</h3>
        <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded border-[1.4px] border-[#000] outline-none bg-gray-50"
          />
          <button
            className="px-6 py-2 bg-black border-[1.4px] border-black  hover:text-black rounded-md hover:bg-gray-50 text-white transition duration-300"
          >
            Subscribe
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-4">
          By subscribing you agree to our <span className="text-blue-500">Privacy Policy</span>
        </p>
      </div>

      {/* Social Media Links & Copyright */}
      <div className="mt-8 bg-[#f7f7f7] border-t py-4 text-center text-md text-gray-600">
        <div className="flex justify-center space-x-3 mb-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaLinkedin />
          </a>
        </div>

        <p className='text-sm'>2023 Ddsgnr. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
