import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdmya5QGmSo7tn3LUrqcnoJmHEHEED1wqTRmPZCG3GVvtb7-g/viewform?embedded=true";
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
                  href="/index_applicant"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/applicant-form"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/my-job-listings"
                  className="text-white text-3xl hover:text-blue-500 hover:bg-green-300 p-2 rounded-md"
                >
                  My Job Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/candidates-bank"
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
              Hi, Jane Doe
              <span className="material-icons text-2xl">arrow_drop_down</span>
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
          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
            <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
              Congratulations on taking the first step towards an exciting new
              career journey with CareerCurve!
            </p>
          </section>
          <section className="bg-white rounded-lg text-3xl p-6 mb-6 border border-blue-100 italic">
            <p>
              We're thrilled to embark on this <span className="text-blue-400 font-bold italic">adventure</span> with you and help you
              discover the <span className="text-blue-400 font-bold italic">perfect job opportunities</span> that align with your 
               <span className="text-blue-400 font-bold italic"> passions</span> and <span className="text-blue-400 font-bold italic">aspirations</span>.
            </p>
            <p className="text-3xl text-blue-1000">
              This form is your key to unlocking a world of <span className="text-blue-400 font-bold">tailored</span> job
              recommendations specifically curated for you. We want to
              understand what <span className="text-blue-400 font-bold">drives you</span>, what makes your heart skip a beat, and
              what ignites that <span className="text-blue-400 font-bold">spark of excitement</span> when it comes to your
              professional life. Think of it as your personal gateway to a realm
              of endless possibilities. It's a chance for you to showcase your
              <span className="text-blue-400 font-bold"> skills</span>, <span className="text-blue-400 font-bold">dreams</span>, and <span className="text-blue-400 font-bold">unique personality</span>. But this form is more than
              just a questionnaire. It's a bridge connecting you to the
              opportunities that can shape your <span className="text-blue-400 font-bold">future</span>. It's a canvas where you
              can paint a vivid picture of your career aspirations and watch as
              we transform them into tangible, tailored recommendations that
              <span className="text-blue-400 font-bold"> perfectly match</span> your <span className="text-blue-400 font-bold">ambitions</span>.
            </p>
            <p className="text-3xl text-blue-1000">
              So, take a deep breath, let your <span className="text-blue-400 font-bold">imagination</span> soar, and let the
              magic of this form guide us on an unforgettable journey together.
              Get ready to dive in and discover a world of career opportunities
              that are <span className="text-blue-400 font-bold">tailor-made for you</span>.
            </p>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
            <p className="text-blue-500 text-5xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 text-center">
              Your journey starts now. Let's make your dreams a reality!
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 mb-6 flex flex-col items-center border border-blue-100">
            <h2 className="text-4xl font-semibold mb-4 text-blue-600">
              Step 1: Upload Your CV/Resume
            </h2>
            <input
              type="file"
              className="border border-gray-300 p-2 rounded-md cursor-pointer mb-8"
            />
            <h2 className="text-4xl font-semibold mb-4 text-blue-600 mb-6">
              Step 2: Fill the form below
            </h2>

            <iframe
              src={formURL}
              width={"1480"}
              height={"800"}
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </section>

          <section className="rounded-lg p-6 mb-6 flex flex-col items-center ">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-2xl text-white font-bold py-2 px-4 rounded">
              I confirm I have completed the form
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
