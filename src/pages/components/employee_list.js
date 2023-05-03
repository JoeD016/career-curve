import React, { useState } from 'react';
import Head from "next/head";

const EmployeeList = () => {
  const allEmployees = [
    { name: 'John Doe', description: 'Full Stack Developer', match: 85 },
    { name: 'Jane Smith', description: 'Data Analyst', match: 90 },
    { name: 'Alice Johnson', description: 'UX Designer', match: 95 },
    { name: 'Bob Brown', description: 'Project Manager', match: 80 },
    { name: 'Charlie Wilson', description: 'Product Manager', match: 92 },
    { name: 'Aya', description: 'Product Manager', match: 92 },
    { name: 'Nick Pacia', description: 'Product Manager', match: 92 },
    { name: 'Jojo', description: 'Product Manager', match: 92 },
  ];

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

  const employeesToShow = allEmployees.slice(0, visibleEmployees);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
        {/* <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
          <h1 className="text-4xl font-bold text-white">Career Curve</h1>
          <p className="text-white">
            Find your perfect tech job, tailored to your aspirations
          </p>
        </header> */}
      <div className="mb-6">
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
      </div>

      <h1 className="text-2xl font-bold mb-4">Prospective Employees</h1>

      <ul>
        {employeesToShow.map((employee, index) => (
          <li key={index} className="border-b border-gray-200 py-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-lg font-medium">{employee.name}</h1>
                <p className="text-gray-600">{employee.description}</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-full">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}

      {showHideButton && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
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

