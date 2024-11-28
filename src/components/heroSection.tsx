import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black md:pt-0 pt-10">
      {/* Left Side: Content */}
      <div className="md:w-2/3 text-center md:text-left md:px-20 ">
        <h1 className="md:text-4xl text-3xl font-extrabold mb-4">
          Start Your Learning Journey Today!
        </h1>
        <p className="md:text-lg mb-6">
          Unlock a world of knowledge with our expert-led courses. Join now and learn at your own pace!
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="md:px-6 md:py-3 py-2 px-4  bg-black text-white rounded-md hover:text-black hover:bg-gray-200  transition duration-300">
            Start Learning Now
          </button>
          <button className="px-6 py-3 bg-transparent border-[1.4px] border-black text-black rounded-md hover:bg-black hover:text-white transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src="/Image.png" 
          alt="Learning"
          width={400} 
          height={200}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
