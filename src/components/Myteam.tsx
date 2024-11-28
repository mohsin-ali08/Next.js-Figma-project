import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaStar } from "react-icons/fa";

const MyTeam: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] py-10 border-t border-b border-gray-300">
      <div className="text-center mb-12">
        <h2 id="Achievements" className="text-4xl font-bold text-black mb-4">My Team</h2>
        <p className="text-lg text-gray-600">
          Meet the talented individuals who make it all possible.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="text-center">
            <Image
              src={`/team${index + 1}.png`}
              alt={`Team Member ${index + 1}`}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Team Member {index + 1}
            </h3>
            <p className="text-sm text-gray-600 mb-4">Role</p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-black hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 id="Testimontial" className="text-4xl font-bold text-black mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            What our customers say about us
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          <div className="bg-white text-left p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex mb-4 justify-left">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar key={starIndex} className="text-gray-600" />
              ))}
            </div>
            {/* Testimonial Text */}
            <p className="text-md text-gray-600 mb-4">
              This team helped us achieve our goals with exceptional quality
              and efficiency. We highly recommend them!
            </p>
            {/* Team Member Info */}
            <div className="flex">
              <Image
                src="/team1.png"
                alt="Team Member 1"
                className="w-12 h-12 object-cover rounded-full"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-black">John Doe</h4>
                <p className="text-xs text-gray-600">Frontend Developer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white text-left p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex mb-4 justify-left">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar key={starIndex} className="text-gray-600" />
              ))}
            </div>
            <p className="text-md text-gray-600 mb-4">
              They exceeded our expectations in every way. Excellent service
              and very reliable team to work with.
            </p>
            <div className="flex">
              <Image
                src="/team2.png"
                alt="Team Member 2"
                className="w-12 h-12 object-cover rounded-full"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-black">Jane Smith</h4>
                <p className="text-xs text-gray-600">UI/UX Designer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white text-left p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex mb-4 justify-left">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar key={starIndex} className="text-gray-600" />
              ))}
            </div>
            <p className="text-md text-gray-600 mb-4">
              Their dedication to quality and customer satisfaction is
              remarkable. Highly skilled and talented team!
            </p>
            <div className="flex">
              <Image
                src="/team3.png"
                alt="Team Member 3"
                className="w-12 h-12 object-cover rounded-full"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-black">
                  Alice Brown
                </h4>
                <p className="text-xs text-gray-600">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
