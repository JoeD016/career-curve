import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Career Curve</title>
        </Head>

        <header className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
          <h1 className="text-4xl font-bold text-white">Career Curve</h1>
          <p className="text-white">
            Find your perfect tech job, tailored to your aspirations
          </p>
        </header>

        <main className="container mx-auto p-6">
          <section className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Why Career Curve?</h2>
            <p>
              Career Curve is a unique recruiting platform designed specifically
              for technical job seekers. Our platform not only showcases your
              past experience but also highlights your future aspirations,
              making it easier for recruiters to find the perfect candidate.
            </p>
            <p>
              Get ready to embark on a career journey that truly aligns with
              your goals and interests, while also providing you with
              opportunities for growth and development.
            </p>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
            <ul>
              <li>Personalized job recommendations</li>
              <li>Robust candidate profiles</li>
              <li>Wide range of technical roles</li>
              <li>Insights into the company culture</li>
              <li>Easy application process</li>
            </ul>
            {/* Add a placeholder image */}
          </section>

          <section className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p>
              Take the first step toward a more fulfilling career by signing up
              for Career Curve. Create a comprehensive profile that showcases
              your skills, experience, and aspirations, and let us help you find
              the perfect job.
            </p>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Sign Up Now
            </button>
          </section>
        </main>

        <footer className="bg-gray-200 p-6">
          <div className="flex justify-center space-x-4">
            <Link legacyBehavior href="/companyUI">
              <a className="text-blue-500 hover:underline">Company UI</a>
            </Link>
          </div>
          <p className="text-center mt-4">
            &copy; 2023 Career Curve. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
