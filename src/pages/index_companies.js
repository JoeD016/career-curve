import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            <div>
                <p className="text-white text-xl flex">Hi, Jane Doe</p>
            </div>
        </header>

        <main className="container mx-auto p-6">
            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <p className = "text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500 mb-6">
                Welcome to CareerCurve
                </p>
                <p className = "text-blue-600 text-2xl ">
                  Find Your Diamond In The Rough!
                </p>
                </div>
            </section>
            <section className = "bg-white rounded-lg p-6 mb-6 border border-blue-100 flex flex-col items-center">
              <p>
                Are you tired of the same old recruitment process? 
              </p>
              <p>
                Do you feel like you're missing out on exceptional talent?
              </p>
              <p>
                It's time to break free from the ordinary and transform your hiring strategy into something extraordinary.
              </p>
              <p>
                Start using our cutting-edge job matching platform that connects jobseekers and employers in a seamless and efficient way now.
              </p>
            </section>
            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
                <p className = "text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
                Why Career Curve?
                </p>
            </section>

          <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
            <p>
              Career Curve is a unique recruiting platform designed specifically
              for technical job seekers. Our platform not only showcases your
              past experience but also highlights your future aspirations,
              making it easier for recruiters to find the perfect candidate.

              With our powerful machine learning and optimization techniques, 
              we ensure optimal pairing between candidates and employers, 
              saving time and effort for both parties.
            </p>
            <p>
              Get ready to embark on a career journey that truly aligns with
              your goals and interests, while also providing you with
              opportunities for growth and development.
            </p>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
                <p className = "text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
                Our Features
                </p>
            </section>

          <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
            <ul>
              <li>Personalized applicants recommendations</li>
              <li>Robust candidate profiles</li>
              <li>Aspiration oriented match making</li>
            </ul>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
                <p className = "text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
                Get Started
                </p>
            </section>

          <section className="bg-white rounded-lg p-6 border border-blue-100">
            <p>
              Take the first step toward a more fulfilling career by signing up
              for Career Curve. Create a comprehensive profile that showcases
              your skills, experience, and aspirations, and let us help you find
              the perfect job.
            </p>

            {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Sign Up Now
            </button> */}
          </section>

          <section className=" rounded-lg p-6 flex flex-col items-center">
          <Link href="/applicant-form"> {/* Add the Link component */}
              <a>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                  Sign Up Now
                </button>
              </a>
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
