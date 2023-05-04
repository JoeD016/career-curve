import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EmployeeList from './components/employee_list';
import Link from "next/link";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

const spinnerStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .spinner {
    border: 25px solid rgba(0, 0, 0, 0.1);
    border-left-color: #3498db;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    animation: spin 1s linear infinite;
  }
`;

export default function Home() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [jobDescription, setJobDescription] = useState('');
    const [showEmployeeList, setShowEmployeeList] = useState(false);
    const [hoveredRole, setHoveredRole] = useState("");

    const handleJobDescriptionChange = (event) => {
        setJobDescription(event.target.value);
    };

    const [spinning, setSpinning] = useState(false);

    const handleShowEmployeeList = () => {
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
        setShowEmployeeList(true);
      }, 2000);
    };

    const handleMouseEnter = (role) => {
      setHoveredRole(role);
    };
  
    const handleMouseLeave = () => {
      setHoveredRole("");
    };

const RankQualitiesBox = ({ role }) => {
  const [qualitiesOrder, setQualitiesOrder] = useState([]);

  const handleRankChange = (event, quality) => {
    const newRank = parseInt(event.target.value);
    setQualitiesOrder((prev) =>
      prev.filter((item) => item.quality !== quality).concat({ quality, rank: newRank })
    );
  };

  const qualities = [
    'Communication',
    'Teamwork',
    'Problem-solving',
    'Leadership',
    'Technical skills',
  ];

  return (
    <div className="mt-4">
      <h3 className="mb-2">{`Rank the qualities for ${role} candidates`}</h3>
      {qualities.map((quality) => (
        <div key={quality} className="flex items-center mb-2">
          <label className="mr-2">{quality}:</label>
          <select onChange={(event) => handleRankChange(event, quality)}>
            <option value="">Select</option>
            {qualities.map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

  return (
    <>
<div className="min-h-screen bg-gray-100">
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
                    <Link href="/" className="text-white text-2xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/my-company" className="text-white text-2xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    My Company
                    </Link>
                </li>
                <li>
                    <Link href="/my-job-listings" className="text-white text-2xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    My Job Listings
                    </Link>
                </li>
                <li>
                    <Link href="/companyUI" className="text-white text-2xl hover:text-blue-500  hover:bg-green-300 p-2 rounded-md">
                    My Matches
                    </Link>
                </li>
            </ul>
            </nav>

            <div className="relative">
              <button
                className="text-white text-2xl flex"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Hi, Jane Doe
                {/* <span className="material-icons text-2xl">arrow_drop_down</span> */}
                <img
                  src="/asset/drop-down-arrow.png"
                  alt="Dropdown Icon"
                  class="w-6 h-6 filter brightness-0 invert"
                />
              </button>
                {dropdownOpen && (
                    <div className="bg-blue-100 absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
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
                        <Link href="/logout">
                            Log Out
                        </Link>
                        </div>
                    </div>
          )}
        </div>
        </header>
        <main className={styles.main}>
          <style>{spinnerStyle}</style>
          <div className="mb-6">
            <h1 className="text-lg font-semibold mb-2">Matching Algorithm</h1>
            <p className="text-gray-600">
              Our proprietary matching algorithm analyzes each candidate's skills, experience, and preferences to determine the best fit for our organization.
              The percentage match displayed represents the overall compatibility of the candidate with the job requirements and company culture.
            </p>
          </div>
          <div className="mb-4">
        <h1 className="text-lg font-semibold mb-2">Job Description</h1>
        <div className="flex flex-col">
        {[
          { label: 'Software Engineer', description: 'Designs and develops software solutions' },
          { label: 'Project Manager', description: 'Manages projects and coordinates teams' },
          { label: 'Data Analyst', description: 'Analyzes data and provides insights' },
        ].map((option) => (
          <div
            key={option.label}
            onMouseEnter={() => handleMouseEnter(option.label)}
            onMouseLeave={handleMouseLeave}
          >
            <label
              className="inline-flex items-center mb-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
            >
              <input
                type="radio"
                className="form-radio"
                name="jobDescription"
                value={option.label}
                onChange={handleJobDescriptionChange}
              />
              <span className="ml-2">{option.label}</span>
            </label>
            {hoveredRole === option.label && (
              <div className="p-2 border border-gray-300 rounded-md bg-gray-200 mb-2">
                {option.description}
              </div>
            )}
          </div>
        ))}
      </div>
      {jobDescription && <RankQualitiesBox role={jobDescription} />}
      </div>
          <div className="flex justify-center items-center mb-4 flex-col">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleShowEmployeeList}
            >
              Get Recommendations
            </button>
            {spinning && (
              <div className="spinner mt-4"></div>
            )}
          </div>
          {showEmployeeList && <EmployeeList />}
            </main>
      </div>
    </>
  );
}