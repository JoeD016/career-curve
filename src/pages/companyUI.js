import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EmployeeList from "./components/employee_list";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [jobDescription, setJobDescription] = useState("software engineer");
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [hoveredRole, setHoveredRole] = useState("");
  // const defaultData = [
  //   {
  //     name: "Matt Stratakis",
  //     industries: "MS Finance",
  //     strength: "asdf",
  //     match: 98,
  //   },
  //   {
  //     name: "Pedro Ortego",
  //     industries: "MEng CS",
  //     strength: "asdf",
  //     match: 92,
  //   },
  //   {
  //     name: "Cait Burke",
  //     industries: "BA Finance",
  //     strength: "asdf",
  //     match: 89,
  //   },
  //   {
  //     name: "Michael James",
  //     industries: "BA Economics",
  //     strength: "asdf",
  //     match: 87,
  //   },
  //   {
  //     name: "Charlie Wilson",
  //     industries: "Data Scientist",
  //     strength: "asdf",
  //     match: 86,
  //   },
  //   { name: "Aya Chehabi", industries: "MEng CS", strength: "asdf", match: 85 },
  //   {
  //     name: "Nick Pacia",
  //     industries: "BA Economics",
  //     strength: "asdf",
  //     match: 84,
  //   },
  //   { name: "Jojo Dong", industries: "MEng CM", strength: "asdf", match: 83 },
  // ];
  const [candidatesData, setCandidatesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3006/api/getCandidateProfiles",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ num_response: 8, concepts: jobDescription }), // Replace jobDescription with your request body data
          }
        );

        if (response.ok) {
          const data = await response.json();
          const formatedData = data.data.Get.Candidates;
          const matchNumbers = Array.from(
            { length: formatedData.length },
            (_, index) => 90 - index
          );
          const formatedWithMatchData = formatedData.map((obj, index) => ({
            ...obj,
            match: matchNumbers[index],
          }));
          setCandidatesData(formatedWithMatchData);
        } else {
          console.error("Error:", response.statusText);
        }

        // setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        // setLoading(false);
      }
    };

    fetchData();
  }, [jobDescription]);

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
    const [qualitiesOrder, setQualitiesOrder] = useState(Array(3).fill(""));

    const handleRankChange = (event, index) => {
      const newQuality = event.target.value;
      setQualitiesOrder((prev) => {
        const updatedQualities = [...prev];
        updatedQualities[index] = newQuality;
        return updatedQualities;
      });
    };

    const qualities = [
      "Mathematical skills",
      "Programming skills",
      "Problem-solving",
      "Communication skills",
      "Interest in finance / economics",
    ];

    return (
      <div className="bg-white rounded-lg p-6 mb-6 border border-blue-100 text-justify text-3xl text-blue-1000">
        <h3 className="mb-6">{`Rank qualities of ${role} candidates by importance:`}</h3>
        {qualitiesOrder.map((selectedQuality, index) => (
          <div key={index} className="text-3xl text-blue-1000 mb-4">
            <label className="mr-2">{`⊛ Quality ${index + 1}:`}</label>
            <select
              value={selectedQuality}
              onChange={(event) => handleRankChange(event, index)}
            >
              <option value="">Select</option>
              {qualities.map((quality) => (
                <option
                  key={quality}
                  value={quality}
                  disabled={qualitiesOrder.includes(quality)}
                >
                  {quality}
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
      <main className="min-h-screen bg-gray-100">
        <Head>
          <title>Career Curve</title>
        </Head>

        <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6 flex justify-between items-center">
          <div>
            <Link href="./">
              <h1 className="text-4xl font-bold text-white">Career Curve</h1>
            </Link>
            <p className="text-white">
              Find your perfect tech job, tailored to your aspirations
            </p>
          </div>
          <nav>
            <ul className="flex space-x-20">
              <li>
                <Link
                  href="/index_companies"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/index_companies"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  My Company
                </Link>
              </li>
              <li>
                <Link
                  href="/new_job"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  Add Job Listing
                </Link>
              </li>
              <li>
                <Link
                  href="/companyUI"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  My Job Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/companyUI"
                  className="text-white text-3xl hover:text-blue-500  hover:bg-green-300 p-2 rounded-md"
                >
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
              Hi, Sam
              <img
                src="/asset/drop-down-arrow.png"
                alt="Dropdown Icon"
                className="w-7 h-6 filter brightness-0 invert mt-2 ml-2"
              />
            </button>
            {dropdownOpen && (
              <div className="bg-blue-100 absolute right-0 mt-2 py-2 w-64 bg-white rounded-md shadow-xl">
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Link href="/my-account">Settings</Link>
                </div>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Link href="/report-problem">Report a Problem</Link>
                </div>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Link href="/">Log Out</Link>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="container mx-auto p-6">
          <style>{spinnerStyle}</style>
          <div className="mb-6">
            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
              <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
                The Matching Algorithm
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100 text-justify">
              <p className="text-3xl text-blue-1000 italic">
                Our proprietary matching algorithm analyzes each candidate's
                skills, experience, and preferences to determine the best fit
                for our organization. The percentage match displayed represents
                the overall compatibility of the candidate with the job
                requirements and company culture.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
              <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
                Open Roles
              </p>
            </section>

            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-100 text-justify text-3xl text-blue-1000">
              {[
                {
                  label: "Quantitative Trader",
                  description:
                    "Develops analytical trading strategies with advanced mathematical techniques, working in finance industry, high frequency trading",
                },
                {
                  label: "Software Engineer",
                  description:
                    "Designs, develops, and deploys software to customers, web development / mobile development",
                },
                {
                  label: "Data Scientist",
                  description:
                    "Analyzes data and provides insights, working with big industry data, also does machine learning work",
                },
              ].map((option) => (
                <div
                  key={option.label}
                  onMouseEnter={() => handleMouseEnter(option.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <label className="inline-flex items-center mb-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                    <input
                      type="radio"
                      className="form-radio"
                      name="jobDescription"
                      value={option.label + ": " + option.description}
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
          <div className="flex justify-center items-center mb-10 flex-col">
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-3xl text-white px-4 py-2 rounded-lg mt-4"
              onClick={handleShowEmployeeList}
            >
              Get Recommendations
            </button>
            {spinning && <div className="spinner mt-4"></div>}
          </div>
          {showEmployeeList && <EmployeeList allEmployees={candidatesData} />}
        </main>
      </main>
    </>
  );
}
