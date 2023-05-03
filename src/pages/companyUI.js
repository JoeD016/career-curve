import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EmployeeList from './components/employee_list';
import Link from "next/link";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
          <EmployeeList />
        </main>
      </div>
    </>
  );
}