import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdmya5QGmSo7tn3LUrqcnoJmHEHEED1wqTRmPZCG3GVvtb7-g/viewform?embedded=true";
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
            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center ">
                <p className = "text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
                Congratulations on taking the first step towards an exciting new career journey with CareerCurve! 
                </p>
            </section>
            <section className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
            <p>
                We're thrilled to embark on this adventure with you and help you discover the perfect job opportunities that align with your passions and aspirations.
            </p>
            <p>
                This form is your key to unlocking a world of tailored job recommendations specifically curated for you. 
                We want to understand what drives you, what makes your heart skip a beat, and what ignites that spark of excitement when it comes to your professional life.
                Think of it as your personal gateway to a realm of endless possibilities.
                It's a chance for you to showcase your skills, dreams, and unique personality. But this form is more than just a questionnaire. 
                It's a bridge connecting you to the opportunities that can shape your future. 
                It's a canvas where you can paint a vivid picture of your career aspirations and watch as we transform them into tangible, tailored recommendations that perfectly match your ambitions.
            </p>
            <p>
                So, take a deep breath, let your imagination soar, and let the magic of this form guide us on an unforgettable journey together.
                Get ready to dive in and discover a world of career opportunities that are tailor-made for you. 
            </p>
            {/* Add a placeholder image */}
          </section>

            <section className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 mb-6 flex items-center justify-center">
                <p className = "text-blue-500 text-2xl font-semibold py-2 px-4 rounded-md shadow-lg border border-blue-500">
                    Your journey starts now. Let's make your dreams a reality!
                </p>
            </section>

            <section className="bg-white rounded-lg p-6 mb-6 flex flex-col items-center border border-blue-100">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Step 1: Upload Your CV/Resume</h2>
                <input
                    type="file"
                    className="border border-gray-300 p-2 rounded-md cursor-pointer mb-8"
                />
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 mb-6">Step 2: Fill the form below</h2>

                <iframe 
                    src={formURL}
                    width={"1480"}
                    height={"2000"}
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                        Loading…
                </iframe>
            </section>

            <section className="rounded-lg p-6 mb-6 flex flex-col items-center ">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded">
                    I confirm I have completed the form
                </button>
            </section>

        </main>
      </div>
    </>
  );
}
