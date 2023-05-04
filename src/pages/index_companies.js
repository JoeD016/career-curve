import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
        
        <main className="container mx-auto p-6">
          <section
            className="bg-cover bg-center p-6 min-h-screen flex items-center justify-center mb-6"
            style={{ backgroundImage: `url('/blue-green.png')`, minHeight: '40vh' }}>
            <div className="text-center">
                <span class="bi bi-box text-blue-700 text-9xl"></span>
                <p className="text-blue-600 text-9xl font-semibold py-2 px-4 rounded-md mb-6">
                  Welcome to CareerCurve
                </p>
                <p className="text-blue-500 text-5xl font-semibold py-2 px-4">
                  Find Your Diamond In The Rough!
                </p>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100 flex flex-col items-center italic">
              <div className="text-blue-800 text-4xl space-y-6 text-center">
                <p className="text-3xl font-semibold text-2xl">
                  Are you tired of the same old recruitment process? 
                </p>
                <p className="text-3xl font-semibold text-2xl">
                  Do you feel like you're missing out on exceptional talent?
                </p>
                <p className="text-3xl font-semibold text-2xl">
                  It's time to break free from the ordinary and transform your hiring strategy into something extraordinary.
                </p>
                <p className="text-3xl font-semibold text-2xl">
                  Start using our cutting-edge job matching platform that connects jobseekers and employers in a seamless and efficient way now.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
              <p className="text-blue-500 text-7xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
                Why Career Curve?
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100 text-justify">
  
            <p className="text-3xl text-blue-1000 italic">
              With CareerCurve, you can <span className="text-blue-400 font-bold italic">streamline</span> your hiring process, 
              access a curated pool of <span className="text-blue-400 font-bold italic">qualified candidates</span>, 
              and discover individuals who align perfectly with your <span className="text-blue-400 font-bold italic">company's vision</span>. 
              Our platform utilizes advanced algorithms and machine learning techniques to ensure <span className="text-blue-400 font-bold italic">optimal matches</span>, 
              <span className="text-blue-400 font-bold italic"> saving you time and effort</span> in finding the right fit.
              </p>
              <p className="text-3xl text-blue-1000 italic">
                We are committed to helping you find the <span className="text-blue-400 font-bold italic">perfect candidates</span> and 
              get your company on the <span className="text-blue-400 font-bold italic">path to success</span>.
              </p>




          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
            <p className="text-blue-500 text-7xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
              Our Features
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
          <ul className="space-y-4">
            <li className="flex flex-col items-center">
              <span className="material-icons text-blue-500 text-8xl">edit</span>
              <span className="text-3xl font-semibold text-blue-1000">Tailored applicants recommendations</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="material-icons text-blue-500 text-8xl">contacts</span>
              <span className="text-3xl font-semibold text-blue-1000">Robust candidate profiles</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="material-icons text-blue-500 text-8xl">cached</span>
              <span className="text-3xl font-semibold text-blue-1000">Aspiration oriented match making</span>
            </li>
          </ul>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
            <p className="text-blue-500 text-7xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
              Get Started
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 border border-blue-100 text-justify italic">
            <p className="text-3xl">
            Join us and unlock a world of <span className="text-blue-400 font-bold italic">recruitment possibilities</span>. 
            Take the first step toward building a team of <span className="text-blue-400 font-bold italic">exceptional individuals </span>
            who will contribute to your company's 
              <span className="text-blue-400 font-bold italic"> growth</span>  and help you 
              <span className="text-blue-400 font-bold italic"> achieve your goals</span>. 

            Create a company profile that highlights your 
            <span className="text-blue-400 font-bold italic"> unique culture</span>, 
            <span className="text-blue-400 font-bold italic"> values</span>, and the 
            <span className="text-blue-400 font-bold italic"> skills </span> 
            you're seeking in candidates and let us find the <span className="text-blue-400 font-bold italic">perfect talents </span> 
             to drive your company's <span className="text-blue-400 font-bold italic">success</span>.
            </p>
            
            <p className="text-3xl">
              Sign up now and let CareerCurve guide you toward the perfect talent for your organization.
            </p>
            {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Sign Up Now
            </button> */}
          </section>

          <section className=" rounded-lg p-6 flex flex-col items-center">
          <Link href="/applicant-form">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-3xl text-white px-4 py-2 rounded-lg mt-4">
                  Sign Up Now
                </button>
          </Link>
          </section>

        </main>

        <footer className="bg-gray-200 p-6">
          <p className="text-center">
            &copy; 2023 Career Curve. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
