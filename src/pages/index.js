import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { useState } from "react";

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
                <Link
                  href="/"
                  className="text-white text-2xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/applicant-form"
                  className="text-white text-2xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/my-job-listings"
                  className="text-white text-2xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  My Job Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/companyUI"
                  className="text-white text-2xl hover:text-blue-500  hover:bg-green-300 p-2 rounded-md"
                >
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
                  <Link href="/my-account">Settings</Link>
                </div>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Link href="/report-problem">Report a Problem</Link>
                </div>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <Link href="/logout">Log Out</Link>
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="container mx-auto p-6">
          <section
            className="bg-cover bg-center p-6 h-90 flex items-center justify-center mb-6"
            style={{ backgroundImage: `url('/blue-green.png')` }}
          >
            {/* <img src="/blue-green.png" className="w-full h-64" /> */}
            <div className="text-center">
              <p className="text-blue-500 text-7xl font-semibold py-2 px-4 rounded-md shadow-lg mb-6">
                Welcome to CareerCurve
              </p>
              <p className="text-blue-500 text-3xl font-semibold py-2 px-4">
                The Only Curve That Launches Your Career into Exponential
                Success!
                {/* Where Dreams Take Shape on the Path of Exponential Growth! */}
                {/* CareerCurve: The Only Curve That Propels Your Career to New Heights */}
                {/* Discover the Power of CareerCurve: Your Fast Track to Exponential Success */}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100 flex flex-col items-center">
            <div className="text-blue-800 space-y-6 text-center">
              <p className="text-xl font-semibold text-2xl">
                Are you tired of the same old job search routine?
              </p>
              <p className="text-xl font-semibold text-2xl">
                Do you feel like your true potential is being overlooked?
              </p>
              <p className="text-xl font-semibold text-2xl">
                It's time to break free from the ordinary and embark on a career
                journey that is extraordinary.
              </p>
              <p className="text-xl font-semibold text-2xl">
                Start using our cutting-edge job matching platform that connects
                jobseekers and employers in a seamless and efficient way now.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
            <p className="text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
              Why Career Curve?
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
            <p className="text-xl text-2xl text-blue-1000">
              Career Curve is a unique recruiting platform designed specifically
              for technical job seekers. Our platform not only showcases your
              past experience but also highlights your future aspirations,
              making it easier for recruiters to find the perfect candidate.
              With our powerful machine learning and optimization techniques, we
              ensure optimal pairing between candidates and employers, saving
              time and effort for both parties.
            </p>
            <p className="text-xl text-2xl">
              Get ready to embark on a career journey that truly aligns with
              your goals and interests, while also providing you with
              opportunities for growth and development.
            </p>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
            <p className="text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
              Our Features
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
            <ul className="space-y-4">
              <li className="flex items-center space-x-6">
                <span className="material-icons text-blue-500 text-6xl">
                  edit
                </span>
                <span className="text-xl font-semibold text-2xl text-blue-1000">
                  Personalized job recommendations
                </span>
              </li>
              <li className="flex items-center space-x-6">
                <span className="material-icons text-blue-500 text-6xl">
                  account_box
                </span>
                <span className="text-xl font-semibold text-2xl text-blue-1000">
                  Robust candidate profiles
                </span>
              </li>
              <li className="flex items-center space-x-6">
                <span className="material-icons text-blue-500 text-6xl">
                  check_circle_outline
                </span>
                <span className="text-xl font-semibold text-2xl text-blue-1000">
                  Wide range of technical roles
                </span>
              </li>
              <li className="flex items-center space-x-6">
                <span className="material-icons text-blue-500 text-6xl">
                  color_lens
                </span>
                <span className="text-xl font-semibold text-2xl text-blue-1000">
                  Insights into the company culture
                </span>
              </li>
              <li className="flex items-center space-x-6">
                <span className="material-icons text-blue-500 text-6xl">
                  description
                </span>
                <span className="text-xl font-semibold text-2xl text-blue-1000">
                  Easy application process
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
            <p className="text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
              Get Started
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 border border-blue-100">
            <p className="text-xl text-2xl">
              Take the first step toward a more fulfilling career by signing up
              for Career Curve.
            </p>
            <p className="text-xl text-2xl">
              Join us on this incredible journey and unlock a world of career
              possibilities by creating a comprehensive profile that showcases
              your skills, experience, and aspirations, and let us help you find
              the perfect job.
            </p>

            <p className="text-xl text-2xl">
              Your dream career is just a click away. Get ready to curve your
              own path to success with CareerCurve!
            </p>

            {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Sign Up Now
            </button> */}
          </section>

          <section className=" rounded-lg p-6 flex flex-col items-center">
            <Link href="/applicant-form">
              {" "}
              {/* Add the Link component */}
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg mt-4">
                Sign Up Now
              </button>
            </Link>
          </section>
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
