import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        {/* TODO: Add header */}
        <Head>
          <title>Career Curve</title>
        </Head>

        <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6 flex justify-between items-center">
            <div>
            <h1 className="text-4xl font-bold text-white">Career Curve</h1>
            <p className="text-white">
                Find your perfect tech job, tailored to your aspirations
            </p>
            
            </div>
            <nav>
            <ul className="flex space-x-20">
                <li>
                    <Link href="/index_companies" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/my-company" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    My Company
                    </Link>
                </li>
                <li>
                    <Link href="/new_job" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    Add Job Listing
                    </Link>
                </li>
                <li>
                    <Link href="/my-job-listings" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    My Job Listings
                    </Link>
                </li>
                <li>
                    <Link href="/companyUI" className="text-white text-3xl hover:text-blue-500  hover:bg-green-300 p-2 rounded-md">
                    My Matches
                    </Link>
                </li>
            </ul>
            </nav>

            <div className="relative text-2xl">
                <button
                    className="text-white text-3xl flex"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    Hi, Jane Doe
                    <img
                      src="/asset/drop-down-arrow.png"
                      alt="Dropdown Icon"
                      class="w-7 h-6 filter brightness-0 invert mt-2 ml-2"
                    />
                </button>
                {dropdownOpen && (
                    <div className="bg-blue-100 absolute right-0 mt-2 py-2 w-64 bg-white rounded-md shadow-xl">
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <Link href="/my-account">
                            Settings
                        </Link>
                        </div>
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <Link href="/report-problem">
                            Report a Problem
                        </Link>
                        </div>
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <Link href="/">
                            Log Out
                        </Link>
                        </div>
                    </div>
          )}
        </div>
        </header>

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

