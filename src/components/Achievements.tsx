import React from "react";

const Achievements: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto text-center mt-16">
      <h2 id="Achievements" className="text-3xl font-bold mb-4">Our Achievements</h2>
      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-black">+200</p>
          <p className="text-sm text-gray-600">Courses</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-black">50K</p>
          <p className="text-sm text-gray-600">Mentors</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-black">370K</p>
          <p className="text-sm text-gray-600">Students</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-black">100+</p>
          <p className="text-sm text-gray-600">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
