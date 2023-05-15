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
            <Link href="./">
              <h1 className="text-4xl font-bold text-white">Career Curve</h1>
            </Link>
            <p className="text-white">
              Find your perfect tech job, tailored to your aspirations
            </p>
          </div>
        </header>

        <main className="container mx-auto p-6 max-w-none">
          <section
            className="bg-cover bg-center p-6 min-h-screen flex items-center justify-center mb-6"
            style={{
              backgroundImage: `url('/blue-green.png')`,
              minHeight: "40vh",
            }}
          >
            {/* <img src="/blue-green.png" className="w-full h-64" /> */}
            <div className="text-center">
              {/* <span className="material-icons text-blue-500 text-6xl">
                    edit
                </span> */}
              <span class="bi bi-box text-blue-700 text-9xl"></span>
              <p className="text-blue-600 text-9xl font-semibold py-2 px-4 rounded-md shadow-lg mb-6">
                CareerCurve
              </p>
              <p className="text-blue-500 text-3xl font-semibold py-2 px-4">
                {/* Your Fast Track to Exponential Success */}
                {/* Where Dreams Take Shape on the Path of Exponential Growth! */}
                {/* CareerCurve: The Only Curve That Propels Your Career to New Heights */}
                {/* Discover the Power of CareerCurve: Your Fast Track to Exponential Success */}
              </p>
            </div>
          </section>

          {/* <form> */}
          <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-1/4">
              <h2 className="text-blue-500 text-7xl font-semibold py-2 px-4 mb-6 text-center">
                Log In
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-3xl font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Applicant's Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-3xl font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Applicant's Password"
                  />
                </div>
                <div className="flex items-center justify-between ">
                  <button
                    className="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    type="button"
                  >
                    <Link href="/2fa">Log In</Link>
                  </button>

                  <Link
                    href="/"
                    className="inline-block align-baseline font-bold text-2xl text-blue-500 hover:text-blue-800"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* </form> */}
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
