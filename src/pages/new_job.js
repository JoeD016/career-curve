import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Job Listing Submitted:', jobTitle, jobDescription, jobRequirements);
    // Reset form fields
    setJobTitle('');
    setJobDescription('');
    setJobRequirements('');
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
                    <Link href="/index_companies" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/index_companies" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    My Company
                    </Link>
                </li>
                <li>
                    <Link href="/new_job" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
                    Add Job Listing
                    </Link>
                </li>
                <li>
                    <Link href="/companyUI" className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md">
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
                    Hi, Sam
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

        <main className="container mx-auto p-6">


          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 border border-blue-100">
          <section className="bg-blue-400 p-6 flex items-center justify-center mb-6">
            <div className="text-center  rounded-lg p-6">
                <p className="text-white text-5xl font-semibold mb-6">Submit a Job Listing</p>
            </div>
            </section>


                <div className="mb-6">
                <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
                        <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
                        Job Title
                        </p>
                    </section>
                    <input
                    type="text"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the job title"
                    required
                    />
                </div>
                <div className="mb-6">
                <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
                        <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
                        Job Description:
                        </p>
                    </section>
                    <textarea
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    placeholder="Enter the job description"
                    required
                    ></textarea>
                </div>
                <div className="mb-6">
                <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
                        <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
                        Job Requirements:
                        </p>
                    </section>
                    <textarea
                    id="jobRequirements"
                    value={jobRequirements}
                    onChange={(e) => setJobRequirements(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    placeholder="Enter the job requirements"
                    required
                    ></textarea>
                </div>
                <section className=" rounded-lg p-6 flex flex-col items-center">
                    <Link href="/index_companies">
                            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-3xl text-white px-4 py-2 rounded-lg mt-4">
                            Add Job Listing
                            </button>
                    </Link>
                    </section>
            </form>

        </main>

        <footer className="bg-gray-200 p-6">
          <p className="text-center mt-4">
            &copy; 2023 Career Curve. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
