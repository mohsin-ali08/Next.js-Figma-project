import React from "react";
import {
  FaCode,
  FaBullhorn,
  FaComments,
  FaRocketchat,
  FaChalkboardTeacher,
  FaDollarSign,
  FaBusinessTime,
} from "react-icons/fa";
import Image from "next/image";
import Achievements from "../components/Achievements";
import CoursesSection from "../components/Courses";
import MyTeam from "./Myteam";
const BodySection: React.FC = () => {
  return (
    <div className=" text-black">
      <div className="bg-[#f7f7f7] py-5">

      
      {/* Content Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 id="Services" className="text-3xl font-bold mb-4">Our Partners</h2>
        <p className="text-lg mb-8">
          We collaborate with top industry leaders to provide the best learning
          experience.
        </p>
      </div>

      {/* Images (Logos) Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Logos */}
        <div className="flex justify-center">
          <Image
            src="/logo1.png"
            alt="Logo 1"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo2.png"
            alt="Logo 2"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo3.png"
            alt="Logo 3"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo4.png"
            alt="Logo 4"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/Logo5.png"
            alt="Logo 5"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo6.png"
            alt="Logo 6"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
      </div>

      </div>

      {/* Explore Courses Section */}
      <div className="max-w-6x2 mx-auto text-center mt-16">
        <h2 className="md:text-4xl text-xl  font-bold mb-4">Explore Courses By Category</h2>
        <p className="text-lg mb-8">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>

        {/* Course Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Cards */}
          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaCode size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Design & Development</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaBullhorn size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Marketing</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaCode size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Development</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaComments size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Communication</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaBullhorn size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Digital Marketing</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaRocketchat size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Self Development</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaChalkboardTeacher size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Consulting</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaDollarSign size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Finance</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>

          <div className="flex items-center bg-[#F7F7F7] shadow p-6 space-x-4">
            <div className="flex justify-center items-center bg-white rounded w-12 h-12">
              <FaBusinessTime size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Business</h3>
              <p className="text-sm text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="px-6 py-3 bg-transparent border-[1.5px] border-black text-black rounded-md hover:bg-black hover:text-white transition duration-300">
            View All Courses
          </button>
        </div>

        <div>
          <Achievements />
        </div>
        {/* <Achievements />  */}
        <CoursesSection />
        <MyTeam />
      </div>
    </div>
  );
};

export default BodySection;
