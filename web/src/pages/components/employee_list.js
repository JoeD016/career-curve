import React, { useState } from "react";

const EmployeeList = ({ allEmployees }) => {
  const [visibleEmployees, setVisibleEmployees] = useState(5);
  const [showHideButton, setShowHideButton] = useState(false);

  const handleShowMore = () => {
    setVisibleEmployees(visibleEmployees + 10);
    setShowHideButton(true);
  };

  const handleHide = () => {
    setVisibleEmployees(5);
    setShowHideButton(false);
  };

  const [hoveredEmployeeIndex, setHoveredEmployeeIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredEmployeeIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredEmployeeIndex(null);
  };

  const employeesToShow = allEmployees.slice(0, visibleEmployees);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
          <h1 className="text-4xl font-bold text-white">Career Curve</h1>
          <p className="text-white">
            Find your perfect tech job, tailored to your aspirations
          </p>
        </header> */}
      {/* <div className="mb-6">
        <h1 className="text-lg font-semibold mb-2">Job Description</h1>
        <p className="text-gray-600">
          We are looking for a talented and experienced individual to join our team as a software engineer.
          The ideal candidate should have strong problem-solving skills and a passion for developing innovative solutions.
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-lg font-semibold mb-2">Matching Algorithm</h1>
        <p className="text-gray-600">
          Our proprietary matching algorithm analyzes each candidate's skills, experience, and preferences to determine the best fit for our organization.
          The percentage match displayed represents the overall compatibility of the candidate with the job requirements and company culture.
        </p>
      </div> */}

      <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
        <p className="text-blue-500 text-4xl font-semibold py-2 px-4 text-center">
          Your Best Matches
        </p>
      </section>

      <ul>
        {employeesToShow.map((employee, index) => (
          <li
            key={index}
            className={`border-b border-gray-200 py-4 ${
              index === hoveredEmployeeIndex ? "bg-gray-200" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between">
              <div className="flex">
                <button className="inline-block bg-blue-400 text-white px-3 py-1 text-2xl font-bold ml-8 mr-8">
                  <span className="material-icons text-white text-3xl">
                    perm_identity
                  </span>
                </button>
                <section>
                  <h1 className="text-3xl">{employee.name}</h1>
                  <p className="text-2xl text-gray-600">{employee.strength}</p>
                  <p className="text-2xl text-gray-600">
                    {employee.industries}
                  </p>
                </section>
              </div>
              <div className="text-right">
                {/* <button className="inline-block bg-blue-600 hover:bg-blue-900 text-white px-3 py-1 text-2xl font-bold rounded-full mr-8"> */}
                <a
                  href="/profile"
                  className="mr-8 text-blue-500 text-xl hover:text-blue-700 font-bold underline"
                >
                  View Profile
                </a>
                {/* </button> */}

                <span className="inline-block bg-green-500 text-white px-3 py-1 text-2xl font-bold rounded-full">
                  {employee.match}%
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {visibleEmployees < allEmployees.length && !showHideButton && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-900 text-3xl text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}

      {showHideButton && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-3xl text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            onClick={handleHide}
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
