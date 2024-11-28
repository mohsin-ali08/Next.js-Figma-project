import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const CoursesSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "UX/UI Design 201",
      category: "Design",
      price: 2000,
      rating: 5.0,
      image: "/course1.jpeg",
      description: "A beginner's guide to design principles and techniques.",
    },
    {
      id: 2,
      title: "Introduction to Webflow",
      category: "Tech",
      price: 2500,
      rating: 5.0,
      image: "/course2.jpeg",
      description: "Learn to build modern websites using HTML, CSS, and JavaScript.",
    },
    {
      id: 3,
      title: "Data Analysis for Beginners",
      category: "Business",
      price: 1800,
      rating: 4.8,
      image: "/course3.jpeg",
      description: "Master the art of online marketing with hands-on strategies.",
    },
    {
      id: 4,
      title: "Introduction to Python",
      category: "Programming",
      price: 2200,
      rating: 4.7,
      image: "/course4.jpeg",
      description: "Learn the fundamentals of programming with Python.",
    },
    {
      id: 5,
      title: "Rule of Law",
      category: "Law",
      price: 3000,
      rating: 5.0,
      image: "/course5.jpeg",
      description: "Understand the legal principles that uphold justice and equity.",
    },
    {
      id: 6,
      title: "Digital Illustration Basics",
      category: "Art",
      price: 1500,
      rating: 5.0,
      image: "/course6.jpeg",
      description: "A hands-on guide to start creating digital art using Procreate.",
    },
  ];

  return (
    <div className="bg-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-4">
        <h2 id="Courses" className="text-4xl font-bold text-black mb-4">Courses</h2>
        <p className="text-md text-gray-600">Your Ultimate Guide to Learning</p>
      </div>

      {/* Links for Course Categories */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href="#"
          className="text-black border-b-[1.5px] border-transparent px-2 pb-1 hover:text-gray-500 hover:border-black focus:text-gray-500 focus:border-black active:border-black transition-all duration-300"
        >
          Popular
        </a>
        <a
          href="#"
          className="text-black border-b-[1.5px] border-transparent px-2 pb-1 hover:text-gray-500 hover:border-black focus:text-gray-500 focus:border-black active:border-black transition-all duration-300"
        >
          Category Four
        </a>
        <a
          href="#"
          className="text-black border-b-[1.5px] border-transparent px-2 pb-1 hover:text-gray-500 hover:border-black focus:text-gray-500 focus:border-black active:border-black transition-all duration-300"
        >
          Recommended
        </a>
        <a
          href="#"
          className="text-black border-b-[1.5px] border-transparent px-2 pb-1 hover:text-gray-500 hover:border-black focus:text-gray-500 focus:border-black active:border-black transition-all duration-300"
        >
          Best Price
        </a>
      </div>

      {/* Course Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#F7F7F7] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={120}
              height={40}
              layout="intrinsic" 
              className="w-full h-48 object-cover"
            />
            <div className="text-left px-4 py-5">
              <div className="flex justify-between border-b mb-2">
                <div>
                  <h1 className="text-gray-500">{course.category}</h1>
                </div>
                <div className="flex">
                  <FaStar className="text-yellow-500" />
                  <p className="ml-1 text-sm">{course.rating}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-left gap-4">
                <button className="px-5 py-2 bg-transparent border-[1.5px] border-black text-black rounded-md hover:bg-black hover:text-white transition duration-300">
                  Enroll Now
                </button>
                <button className="hover:underline hover:border-b py-2">
                  ${course.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-transparent border-[1.5px] border-black text-black rounded-md hover:bg-black hover:text-white transition duration-300">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CoursesSection;
